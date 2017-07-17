from __future__ import print_function
import freetype
import math
# import scipy.spatial
import numpy
import stl
# import matplotlib.pyplot as plt



# clockwise = outer contour, otherwise inner contour
def is_clockwise(points):
    def getangle(vector):
        x,y=vector[0],vector[1]
        anglerad=0
        if x==0:
            if y>0: anglerad = math.pi/2.0
            elif y<0: anglerad = -math.pi/2.0
        else:
            anglerad = math.atan(float(y)/float(x))
            if x<0 and y>=0: anglerad=math.pi+anglerad
            elif x<0 and y<0: anglerad=-math.pi+anglerad
        return anglerad
    def rotate(vector,radians):
        x,y=vector[0],vector[1]
        newx=x*math.cos(radians) - y*math.sin(radians)
        newy=x*math.sin(radians) + y*math.cos(radians)
        return [newx,newy]
    def getdiff(point1,point2):
        return [point2[0]-point1[0],point2[1]-point1[1]]
    def getangle_change(p0,p1,p2):
        vect1 = getdiff(p0,p1)
        angle1 = getangle(vect1)
        p1new = rotate(p1,-angle1)
        p2new = rotate(p2,-angle1)
        vectnew = getdiff(p1new,p2new)
        angle2 = getangle(vectnew)
        return angle2
    angle_total=0
    ps = points
    np = len(ps)
    for i in range(np):
        change = getangle_change(ps[i],ps[(i+1)%np],ps[(i+2)%np])
        if abs(change-math.pi)<0.000001:
            if abs(angle_total+math.pi)<0.00001:
                change=-1*change
        angle_total += change
    return angle_total<=0









face = freetype.Face('Damion-Regular.ttf')

if False:
    print ('Family name:         {}'.format(face.family_name))
    print ('Style name:          {}'.format(face.style_name))
    print ('Charmaps:            {}'.format([charmap.encoding_name for charmap in face.charmaps]))
    print ('')
    print ('Face number:         {}'.format(face.num_faces))
    print ('Glyph number:        {}'.format(face.num_glyphs))
    print ('Available sizes:     {}'.format(face.available_sizes))
    print ('')
    print ('units per em:        {}'.format(face.units_per_EM))
    print ('ascender:            {}'.format(face.ascender))
    print ('descender:           {}'.format(face.descender))
    print ('height:              {}'.format(face.height))
    print ('')
    print ('max_advance_width:   {}'.format(face.max_advance_width))
    print ('max_advance_height:  {}'.format(face.max_advance_height))
    print ('')
    print ('underline_position:  {}'.format(face.underline_position))
    print ('underline_thickness: {}'.format(face.underline_thickness))
    print ('')
    print ('Has horizontal:      {}'.format(face.has_horizontal))
    print ('Has vertical:        {}'.format(face.has_vertical))
    print ('Has kerning:         {}'.format(face.has_kerning))
    print ('Is fixed width:      {}'.format(face.is_fixed_width))
    print ('Is scalable:         {}'.format(face.is_scalable))
    print ('')
    print( face.glyph.metrics ) # GlyphMetrics
    print( face.glyph.advance ) # FT_Vector


face.set_char_size(100)
# face.load_char('0')
face.load_char('8')
# face.load_char('i')


# return list of segments and holes, each list of (x, y), not closed.
def process_glyph(face):
    segments = []
    holes = []
    start = 0
    for i in range(len(face.glyph.outline.contours)):
        end = face.glyph.outline.contours[i]
        polypoints = face.glyph.outline.points[start:end+1]
        polypoints.append(polypoints[0])
        if is_clockwise(polypoints):
            segments.append(face.glyph.outline.points[start:end+1])
        else:
            holes.append(face.glyph.outline.points[start:end+1])
        start = end
    return (segments, holes)

# generate list of triangle coordinates ((x, y, z), (x, y, z), (x, y, z))
def process_earcut(segment, holes):
    points = []
    hole_indices = []
    for (x, y) in segment:
        points.append(x)
        points.append(y)
    for hole in holes:
        hole_indices.append(len(points)/2)
        for (x, y) in hole:
            points.append(x)
            points.append(y)
    print("earcut", len(points), hole_indices)
    import earcut
    tris = earcut.earcut(points, hole_indices, 2)
    res = []
    for i in range(0, len(tris), 3):
        (a, b, c) = tris[i:i+3]
        res.append((
            (points[a*2+0], points[a*2+1]),
            (points[b*2+0], points[b*2+1]),
            (points[c*2+0], points[c*2+1]),
        ))
    return res


def process_sides(segments, holes, width):
    res = []
    for segment in segments + holes:
        j = len(segment)-1
        for i in range(len(segment)):
            # create two triangles
            (ix, iy) = segment[i]
            (lx, ly) = segment[j]
            res.append((
                (lx, ly, +width/2),
                (ix, iy, +width/2),
                (lx, ly, -width/2)
            ))
            res.append((
                (lx, ly, -width/2),
                (ix, iy, +width/2),
                (ix, iy, -width/2)
            ))
            j = i
    return res


width = 5

(segments, holes) = process_glyph(face)

triangles = []
for segment in segments:
    triangles += process_earcut(segment, holes)

top = []
bottom = []
for (ax, ay), (bx, by), (cx, cy) in triangles:
    bottom.append((
        (ax, ay, -width/2),
        (bx, by, -width/2),
        (cx, cy, -width/2)
    ))
    top.append((
        (ax, ay, width/2),
        (bx, by, width/2),
        (cx, cy, width/2)
    ))

sides = process_sides(segments, holes, width)


data = numpy.zeros(len(top)+len(bottom)+len(sides), dtype=stl.mesh.Mesh.dtype)
data['vectors'] = numpy.array(top + bottom + sides)
# data = numpy.zeros(len(triangles)*2+len(sides), dtype=stl.mesh.Mesh.dtype)
# for i, ((ax, ay), (bx, by), (cx, cy)) in enumerate(triangles):
#   data['vectors'][i*2+0] = numpy.array([
#     [ax, ay, -width/2],
#     [bx, by, -width/2],
#     [cx, cy, -width/2]
#   ])
#   data['vectors'][i*2+1] = numpy.array([
#     [ax, ay, width/2],
#     [bx, by, width/2],
#     [cx, cy, width/2]
#   ])
mesh = stl.mesh.Mesh(data)
mesh.save('test.stl')








if False:

    polygons = []
    start = 0
    end = 0
    for i in range(len(face.glyph.outline.contours)):
        end = face.glyph.outline.contours[i]
        points = face.glyph.outline.points[start:end+1]
        points.append(points[0])
        print("XXX", i, is_clockwise(points))
        polygons.append(points)
        # tags: 1 = PATH_POINT, 2 = CUBIC_POINT, 0 = QUADRATIC_POINT
        """
        tags = face.glyph.outline.tags[start:end+1]
        tags.append(tags[0])
        segments = [ [points[0],], ]
        for j in range(1, len(points) ):
            segments[-1].append(points[j])
            if tags[j] & (1 << 0) and j < (len(points)-1):
                segments.append( [points[j],] )
        verts = [points[0], ]
        for segment in segments:
            if len(segment) == 2:
                verts.extend(segment[1:])
                #codes.extend(['LINETO'])
            elif len(segment) == 3:
                verts.extend(segment[1:])
                #codes.extend(['CURVE3', 'CURVE3'])
            else:
                verts.append(segment[1])
                #codes.append('CURVE3')
                for i in range(1,len(segment)-2):
                    A,B = segment[i], segment[i+1]
                    C = ((A[0]+B[0])/2.0, (A[1]+B[1])/2.0)
                    verts.extend([ C, B ])
                    #codes.extend([ 'CURVE3', 'CURVE3'])
                verts.append(segment[-1])
                #codes.append('CURVE3')
        polygons.append(verts)
        """
        start = end+1



    # import polytri
    import triangulate
    import polygon

    for verts in polygons:
        p = polygon.SimplePolygon(verts[0:-1], True)
        x = triangulate.Triangulate([], p)
        print( x.triangulate() )
        # x = list( polytri.triangulate(verts[0:-1]) )
        # print( x )

        verts = np.array(verts)

        tri = scipy.spatial.Delaunay(verts)
        plt.triplot(verts[:,0], verts[:,1], tri.simplices.copy())

        plt.plot(verts[:,0], verts[:,1])

    plt.show()


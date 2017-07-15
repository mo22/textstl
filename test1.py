from __future__ import print_function
import freetype

face = freetype.Face('Damion-Regular.ttf')

if True:
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

if True:
    face.set_char_size( 100 )
    face.load_char('S')

    VERTS = []
    CODES = []
    start = 0
    end = 0
    for i in range(len(face.glyph.outline.contours)):
        end = face.glyph.outline.contours[i]
        points = face.glyph.outline.points[start:end+1]
        points.append(points[0])
        tags = face.glyph.outline.tags[start:end+1]
        tags.append(tags[0])
        segments = [ [points[0],], ]
        for j in range(1, len(points) ):
            segments[-1].append(points[j])
            if tags[j] & (1 << 0) and j < (len(points)-1):
                segments.append( [points[j],] )
        verts = [points[0], ]
        codes = ['MOVETO',]
        for segment in segments:
            if len(segment) == 2:
                verts.extend(segment[1:])
                codes.extend(['LINETO'])
            elif len(segment) == 3:
                verts.extend(segment[1:])
                codes.extend(['CURVE3', 'CURVE3'])
            else:
                verts.append(segment[1])
                codes.append('CURVE3')
                for i in range(1,len(segment)-2):
                    A,B = segment[i], segment[i+1]
                    C = ((A[0]+B[0])/2.0, (A[1]+B[1])/2.0)
                    verts.extend([ C, B ])
                    codes.extend([ 'CURVE3', 'CURVE3'])
                verts.append(segment[-1])
                codes.append('CURVE3')
        VERTS.extend(verts)
        CODES.extend(codes)
        start = end+1

    print( 'VERTS', VERTS )
    print( 'CODES', CODES )
    print( 'VERTS', len(VERTS) )
    print( 'CODES', len(CODES) )

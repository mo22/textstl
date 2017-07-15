import stl
import math
import numpy
import matplotlib.tri
import scipy.spatial

# polygon
# create shape

polygon = numpy.array([
  [0, 0],
  [4, 0],
  [4, 1],
  [3, 2],
  [3, 1],
  [0, 1]
])


tess = scipy.spatial.Delaunay(polygon)

data = numpy.zeros(len(tess.vertices), dtype=stl.mesh.Mesh.dtype)
for i, (a, b, c) in enumerate(tess.vertices):
  print i, a, b, c
  data['vectors'][i] = numpy.array([
    [tess.points[a][0], tess.points[a][1], 0],
    [tess.points[b][0], tess.points[b][1], 0],
    [tess.points[c][0], tess.points[c][1], 0]
  ])


# triang = matplotlib.tri.Triangulation(polygon[:,0], polygon[:,1])
# for (a,b, c) in triang.triangles:
#   print "%d/%d %d/%d %d/%d" % (polygon[a][0], polygon[a][1], polygon[b][0], polygon[b][1], polygon[c][0], polygon[c][1])

# top
# bottom
# sides

# data = numpy.zeros(len(triang.triangles), dtype=stl.mesh.Mesh.dtype)
# for i, (a, b, c) in enumerate(triang.triangles):
#   data['vectors'][i] = numpy.array([
#     [polygon[a][0], polygon[a][1], 0],
#     [polygon[b][0], polygon[b][1], 0],
#     [polygon[c][0], polygon[c][1], 0]
#   ])

mesh = stl.mesh.Mesh(data)
mesh.save('test.stl')


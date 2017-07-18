import stl
import math
import numpy
# import matplotlib.tri
# import scipy.spatial

# polygon
# create shape

# polygon = numpy.array([
#   [0, 0],
#   [4, 0],
#   [4, 1],
#   [3, 2],
#   [3, 1],
#   [0, 1]
# ])

polygon = [
  [0, 0],
  [4, 0],
  [4, 1],
  [3, 2],
  [3, 1],
  [0, 1]
]

polygon_flat = [item for sublist in polygon for item in sublist]
print(polygon_flat)

import earcut
x = earcut.earcut(polygon_flat, None, 2)
print(x)

data = numpy.zeros(len(x)/3, dtype=stl.mesh.Mesh.dtype)
for i in range(0, len(x), 3):
  (a, b, c) = x[i:i+3]
  print(a, b, c)
  data['vectors'][i/3] = numpy.array([
    [polygon[a][0], polygon[a][1], 0],
    [polygon[b][0], polygon[b][1], 0],
    [polygon[c][0], polygon[c][1], 0]
  ])



# tess = scipy.spatial.Delaunay(polygon)

# data = numpy.zeros(len(tess.vertices), dtype=stl.mesh.Mesh.dtype)
# for i, (a, b, c) in enumerate(tess.vertices):
#   print i, a, b, c
#   data['vectors'][i] = numpy.array([
#     [tess.points[a][0], tess.points[a][1], 0],
#     [tess.points[b][0], tess.points[b][1], 0],
#     [tess.points[c][0], tess.points[c][1], 0]
#   ])


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


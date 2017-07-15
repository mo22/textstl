# https://github.com/WoLpH/numpy-stl/blob/develop/README.rst
# https://stackoverflow.com/questions/37506315/triangulation-of-a-polygon-using-matplotlib

import stl
import math
import numpy


vertices = numpy.array([
  [-1, -1, -1],
  [+1, -1, -1],
  [+1, +1, -1],
  [-1, +1, -1],
  [-1, -1, +1],
  [+1, -1, +1],
  [+1, +1, +1],
  [-1, +1, +1]
])

faces = numpy.array([
  [0,3,1],
  [1,3,2],
  [0,4,7],
  [0,7,3],
  [4,5,6],
  [4,6,7],
  [5,1,2],
  [5,2,6],
  [2,3,6],
  [3,7,6],
  [0,1,5],
  [0,5,4]
])

cube = stl.mesh.Mesh(numpy.zeros(faces.shape[0], dtype=stl.mesh.Mesh.dtype))
for i, f in enumerate(faces):
  for j in range(3):
    cube.vectors[i][j] = vertices[f[j],:]

cube.save('cube.stl')

from __future__ import print_function
import struct

header = 'STLB ATF 2.0.0.9000 COLOR=\xa0\xa0\xa0\xff                                                  '

def vec_sub(a, b):
  assert len(a) == len(b)
  return tuple([ a[i] - b[i] for i in range(len(a)) ])

def vec_cross(u, v):
  assert len(u) == len(v)
  dim = len(u)
  s = []
  for i in range(dim):
    if i == 0:
      j,k = 1,2
      s.append(u[j]*v[k] - u[k]*v[j])
    elif i == 1:
      j,k = 2,0
      s.append(u[j]*v[k] - u[k]*v[j])
    else:
      j,k = 0,1
      s.append(u[j]*v[k] - u[k]*v[j])
  return s



triangles = []
triangles += [
  ( (0.0, 0.0, 1.0), (1.0, 0.0, 1.0), (1.0, 1.0, 1.0) ),
  ( (1.0, 1.0, 1.0), (0.0, 1.0, 1.0), (0.0, 0.0, 1.0) ),
]
triangles = [
  ((ax*100, ay*100, az*100), (bx*100, by*100, bz*100), (cx*100, cy*100, cz*100)) for ((ax, ay, az), (bx, by, bz), (cx, cy, cz)) in triangles[0:2]
]
# mirror z axis
triangles += [
  ((bx, by, -az), (ax, ay, -bz), (cx, cy, -cz)) for ((ax, ay, az), (bx, by, bz), (cx, cy, cz)) in triangles[0:2]
]
# create other sides
triangles += [
  (b, c, a) for (a, b, c) in triangles[0:4]
]
triangles += [
  (c, a, b) for (a, b, c) in triangles[0:4]
]


with open('test.stl', 'wb') as fp:
  fp.write(header)
  fp.write(struct.pack('<I', len(triangles)))
  for triangle in triangles:
    n1 = vec_sub(triangle[0], triangle[1])
    n2 = vec_sub(triangle[1], triangle[2])
    n = vec_cross(n1, n2)
    fp.write(struct.pack('<fff', n[0], n[1], n[2]))
    fp.write(struct.pack('<fff', triangle[0][0], triangle[0][1], triangle[0][2]))
    fp.write(struct.pack('<fff', triangle[1][0], triangle[1][1], triangle[1][2]))
    fp.write(struct.pack('<fff', triangle[2][0], triangle[2][1], triangle[2][2]))
    fp.write(struct.pack('<H', 20083))

if False:
  with open('noah1.stl', 'rb') as fp:
    header = fp.read(80)
    (count, ) = struct.unpack('<I', fp.read(4))
    print( 'count', count )
    for i in range(count):
      (nx, ny, nz) = struct.unpack('<fff', fp.read(3*4))
      (ax, ay, az) = struct.unpack('<fff', fp.read(3*4))
      (bx, by, bz) = struct.unpack('<fff', fp.read(3*4))
      (cx, cy, cz) = struct.unpack('<fff', fp.read(3*4))
      (attributes, ) = struct.unpack('<H', fp.read(2)) # 20083 ?
      print( 'attributes', attributes )
    print( 'xx', fp.tell() )


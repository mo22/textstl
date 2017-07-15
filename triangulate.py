"""
Triangulate Module for Geometry Package

Things to do:
add unit tests
"""
import math

import polygon


class Triangulate(object):

    """
    Triangulate Class is used for producing a triangulation
    of a simple polygon using Polygon Class.  This is done
    using the 'ear-clipping algorithm'.
    """
    """
    Warning:
            Algorithm reduces original polygon set as it
            finds 'ears', so will have to reset it using
            a method if original polygon is required after
            triangulation.
    """
    """ Can initialize with coordinates or a polygon """
    """ To initialize with polygon use Triangulate([], polygon) """

    def __init__(self, coordinates, polygon = None):

        self.coordinates   = polygon.coordinates if polygon else coordinates
        self.polygon       = polygon if polygon else polygon.SimplePolygon(coordinates)
        self.triangulation = []


    def reset(self):
        """ Resets to a clockwise orientation using coordinate data."""
        self.triangulation = []
        self.polygon       = polygon.SimplePolygon(self.coordinates, True)

    """ The following are helper functions for triangulation """

    def triangle_by_ear_tip(self, vertice):
        """
        This finds the triangle in the polygon created using the
        vertice argument as the ear-tip.  It returns a triplet
        of coordinates.  The triangle is
        vertice.prev - vertice - vertice.next
        """
        return [vertice.prev.coord, vertice.coord, vertice.next.coord]


    def convert_to_barycentric(self, triangle, cartesian_coord):
        """
        Please consult http://en.wikipedia.org/wiki/Barycentric_coordinate_system
        for further information.  For converted coordinate z = (z1, z2, z3), if
        z1, z2, z3 are all between 0 and 1 then they are inside the inputted
        triangle.  If any are equal to 1 or 0 and the rest are in [0,1] then z
        is on the border of the triangle.  Any above 1 or below 0 means that it
        is outside of the triangle.
        """
        """ The triangle coordinates are [a, b, c] """
        a_x, a_y         = triangle[0][0], triangle[0][1]
        b_x, b_y         = triangle[1][0], triangle[1][1]
        c_x, c_y         = triangle[2][0], triangle[2][1]
        coord_x, coord_y = cartesian_coord[0] , cartesian_coord[1]
        """ We next calculate the determinant of the transformation matrix T """
        det_T = (a_x - c_x)*(b_y - c_y) + (c_x - b_x)*(a_y - c_y)
        """
        Using the determinant, we can now calculate the value of each coordinate
        in the barycentric conversion z.
        """
        z_1 = 1.0*((b_y - c_y)*(coord_x - c_x) + (c_x - b_x)*(coord_y - c_y)) / det_T
        z_2 = 1.0*((c_y - a_y)*(coord_x - c_x) + (a_x - c_x)*(coord_y - c_y)) / det_T
        z_3 = 1.0 - z_1 - z_2

        return (z_1, z_2, z_3)


    def is_coord_in_triangle(self, triangle, coordinate):
        """
        See convert_to_barycentric for more information.
        """
        converted_coord = self.convert_to_barycentric(triangle, coordinate)
        for z_i in converted_coord:
            if z_i <= 0.0 or i >= 1.0:
                return False
        return True


    def is_coord_on_triangle(self, triangle, coordinate):
        """
        See convert_to_barycentric for more information.
        """
        converted_coord = self.convert_to_barycentric(triangle, coordinate)
        border_switch   = False
        for z_i in converted_coord:
            if z_i < 0.0 or z_i > 1.0:
                return False
            if i == 0 or i == 1:
                border_switch = True
        return border_switch


    def share_edge(self, triangleA, triangleB):
        """ Converts triangles to polygons and applys share_edge method """
        pgon_A = polygon.SimplePolygon(triangleA, True)
        pgon_B = polygon.SimplePolygon(triangleB, True)
        return pgon_A.share_edge(pgon_B)


    def no_concave_vertices_in(self, triangle):
        """
        Draws from self.polygon.concave, so all_convex_vertices from Polygon
        must be called first for meaningful result.
        """
        for vertice_coord in self.polygon.concave_vertices:
            if self.is_coord_in_triangle(self, triangle, vertice_coord):
                return False
        return True


    def find_ear(self):
        """
        Finds triangles of polygon where the ear-tip is a convex vertice,
        and checks to see if any concave vertices are inside the triangle.
        If not, it is a valid ear to clip off for triangulation.
        """
        polygon_sides = self.polygon.vertice_number
        cursor        = self.polygon.head

        """ Trivial case where polygon is a triangle:"""
        if polygon_sides == 3:
            triangle = self.triangle_by_ear_tip(cursor)
            return [triangle, cursor.coord]

        self.polygon.all_convex_vertices()

        i = 0
        while i <= polygon_sides + 2:
            if cursor.coord in self.polygon.convex_vertices:
                triangle = self.triangle_by_ear_tip(cursor)
                if self.no_concave_vertices_in(triangle):
                    return [triangle, cursor.coord]
            cursor = cursor.next
            i     += 1
        raise ValueError('Polygon is not simple as no ear was found')


    def triangulate(self):
        """
        Culmination of all of the helper functions, triangulate uses the
        'ear-clipping' algorithm to break apart a simple polygon into
        triangles.
        """
        if self.triangulation:
            raise ValueError('Already triangulated')

        while self.polygon.vertice_number >= 3:
            ear = self.find_ear()
            self.triangulation.append(ear[0])
            self.polygon.remove_vertice(ear[1])

        return self.triangulation


    def __repr__(self):
        return 'Triangulation Class for Polygon'

"""
Polygon Module for Geometry Package

Things to do:
add unit tests
"""
import math

import triangulate
import lineintersection



class Vertice(object):

    def __init__(self, coordinate):
        self.coord = coordinate
        self.next  = None
        self.prev  = None

    def __repr__(self):
        return "Vertice at %s." % repr(self.coord)

"""
Polygon class
- using doubly linked lists for vertices
"""

class SimplePolygon(object):

    """Initialization of Polygon instance """
    """
    Warning:    all coordinates are assumed to be (x,y)
                Cartesian tuples.  (0,0) is taken to be
                the origin, so coordinates are NOT in
                line with computer coordinate standards
                of starting at the top left of the screen
    """
    def __init__(self, coordinates, orientation_bool):
        """
        orientation_bool is true for clockwise, false for ccw.
        coordinates is a list of tuples denoting coordinates in
        the cartesian plane.
        The coordinates need to be listed in order of connection.
        Also, coordinates[i+1] is clockwise from coordinates[i].

        self.orientation/self.head require methods for init as
        seen below.  Note that self.head will become a vertice
        with data from coordinates[0].

        self.convex/concave_vertices are populated after some
        later methods, as with line_segments.
        """
        self.coordinates      = coordinates
        self.vertice_number   = self.count_vertices()
        self.orientation      = None
        self.head             = None
        self.line_segments    = None
        self.convex_vertices  = []
        self.concave_vertices = []

        """ Orientation initialization """
        if orientation_bool:
            self.head = self.orientate(coordinates, True)
        else:
            self.head = self.orientate(coordinates)

    """
    The following are methods for working with the vertices of
    the polygon object.
    """

    def orientate(self, coordinates, clockwise = False):
        """
        This method creates a list of vertices with data from
        coordinates.  It then iterates over the list assigning
        pointers to the appropriate vertices (clockwise = next),
        finally returning the head of the polygon linked list.
        This is the meat behind initializing the Polygon Class.
        Note: you can also re-orientate the polygon using this.
        """
        """ Some Exception handling for initialization is done here. """
        if len(coordinates) < 3:
            raise ValueError('Polygons require at least 3 vertices.')

        # for coord in coordinates:
        #     if coordinates.count(coord) != 1:
        #         raise ValueError('Multiple vertices at same location')

        vertices   = [Vertice(coord) for coord in coordinates]
        poly_sides = len(vertices)
        orient_var = -1 if clockwise else 1

        for i in xrange(poly_sides):
            vertices[i % poly_sides].prev = vertices[(i+orient_var) % poly_sides]
            vertices[i % poly_sides].next = vertices[(i-orient_var) % poly_sides]
        """
        self.orientation is set to clockwise argument and self.head
        becomes the first vertice in the list.
        """
        self.orientation = clockwise
        return vertices[0]


    def count_vertices(self):
        return len(self.coordinates)


    def coordinate_in_polygon(self, coord):
        return True if coord in self.coordinates else False


    def remove_vertice(self, vertice_coord):
        """
        Conditions where removing is impossible:
        - vertice coordinate is not in Polygon
        - polygon has 3 sides (2 sides is not a polygon)
        """
        if not self.coordinate_in_polygon(vertice_coord):
            raise ValueError('Vertice not in polygon')

        elif self.vertice_number == 3:
            raise ValueError('Simple polygon must have three vertices')

        """
        Removing vertice makes use of a cursor.  Initializing cursor at
        self.head, we traverse the polygon until we reach the vertice
        to be removed.  We change the vertices adjacent to connect with
        eachother, and remove coordinate from self.coordinates, updating
        self.vertice_number as well.
        """

        cursor = self.head
        while cursor.coord != vertice_coord:
            cursor = cursor.next
        """ We have reached the desired vertice"""
        cursor.prev.next = cursor.next
        cursor.next.prev = cursor.prev
        """ Dealing with case where removed vertice was self.head """
        if cursor == self.head:
            self.head = cursor.next
        """ Tidying up and updating polygon attributes """
        cursor = None
        self.coordinates.remove(vertice_coord)
        self.vertice_number -= 1
        return


    def insert_vertice(self, insertion_point, vertice_coord):
        """
        Similar method to remove_vertice.  Locates insertion_point and
        initializes a new vertice with vertice_coord data.  We change
        the appropriate vertice connections so that the new vertice
        comes before the insertion_point in the polygon.  Updates
        polygon, and then checks if it remains simple.  If not, applies
        self.remove_vertice immediately.
        """
        if not self.coordinate_in_polygon(insertion_point):
            raise ValueError('Insertion point not in polygon')
        """
        Should refactor this into another function, it is repeatedly
        occuring:
        """
        cursor = self.head
        while cursor.coord != insertion_point:
            cursor = cursor.next
        """ Updating vertice connections """
        new_vertice                        = Vertice(vertice_coord)
        new_vertice.prev, new_vertice.next = cursor.prev, cursor
        cursor.prev.next                   = new_vertice
        cursor.prev                        = new_vertice
        """ Updating polygon data """
        cursor_index = self.coordinates.index(cursor.coord)
        self.coordinates.insert(cursor_index, vertice_coord)
        self.vertice_number += 1
        """ Checking if polygon remains simple """
        if not self.is_simple():
            self.remove(vertice_coord)
            raise ValueError('Resultant polygon is not simple')
        """ Addressing case where cursor was self.head """
        if not cursor_index:
            self.head = new_vertice
        return


    def move_vertice(self, old_coord, new_coord):
        """
        Identical traversal as insert/remove_vertice.  Locates vertex,
        and updates its coordinate and self.coordinates.  It then checks
        if new polygon is simple, and will revert if not and raise an
        exception.
        """
        if not self.coordinate_in_polygon(old_coord):
            raise ValueError('Vertice not in polygon')
        """ Traversal """
        cursor = self.head
        while cursor.coord != old_coord:
            cursor = cursor.next
        """ Updating coordinates """
        cursor.coord    = new_coord
        old_coord_index = self.coordinates.index(old_coord)
        self.coordinates[old_coord_index] = new_coord
        """ Checking if polygon remains simple """
        if not self.is_simple():
            cursor.coord = old_coord
            self.coordinates[old_coord_index] = old_coord
            raise ValueError('Resultant polygon is not simple')
        return


    def update_vertice(self, old_coord, new_coord):
        """
        Search for vertice in polygon, then updates it, checks if
        resultant polygon is still simple.  If not, reverts and
        raises ValueError.
        """
        if not self.coordinate_in_polygon(old_coord):
            raise ValueError('Vertice not in polygon')

        cursor = self.head
        """ Finding vertice to update """
        while cursor.coord != coord:
            cursor = cursor.next

        """ Updating and reverting if not simple """
        cursor.coord = new_coord
        if not self.is_simple():
            cursor.coord = old_coord
            raise ValueError('Resultant polygon is not simple')


    def scale_vertice_from_point(self, vertice, point, scale):
        """
        Returns cartesian coordinate tuple resulting from scaling
        a vertice away from a point given a scale.  This is useful
        when the polygon centroid is not 0, as the vertice will need
        to scale away from the centroid instead of (0,0).  This is
        ultimately used in scaling an entire polygon.  This will be
        done by moving the point over so that the centroid would be
        (0,0), scaling, then bringing it back.
        """
        x = vertice.coord[0] - point[0]
        y = vertice.coord[1] - point[1]
        return (x*scale + point[0], y*scale + point[1])


    def rotate_vertice_about_point(self, vertice, point, radians):
        """
        Similar idea to scale_vertice_from_point, except now we take
        an amount to rotate in radians instead of a scale, and apply
        it to the vertice relocated so that the point is at (0,0).
        Ultimately used as a helper function for rotating a polygon.
        """
        x = vertice.coord[0] - point[0]
        y = vertice.coord[1] - point[1]
        x_rotated = math.cos(radians)*x - math.sin(radians)*y
        y_rotated = math.sin(radians)*x + math.cos(radians)*y
        return (x_rotated + point[0], y_rotated + point[1])


    def translate_vertice(self, vertice, translation_vector):
        """
        Returns new cartesian coordinate tuple by calculating
        changes to vertice done by translation_vector.
        """
        x_translated = vertice.coord[0] + translation[0]
        y_translated = vertice.coord[1] + translation[1]
        return (x_translated, y_translated)

    """
    The following methods are for changing the polygon as a whole.
    """

    def rotate_polygon(self, angle, radians = False, clockwise = False):
        """
        Rotates polygon by angle argument.  Should make it possible
        to input radians instead.  This works by applying the rotation
        to each coordinate and initializing a new polygon class to return.
        """
        new_coords    = []
        centroid      = self.centroid()
        angle         = math.radians(angle) if not radians else angle
        first_vertice = self.head
        sentinel      = first_vertice

        new_coords.append(
            self.rotate_vertice_about_point(first_vertice, centroid, angle))

        """ Traversal """
        first_vertice = first_vertice.next
        while first.vertice != sentinel:
            """
            If oriented CCW then add in before previous coordinate.
            Initialization list must be in clockwise order.
            """
            if self.orientation:
                new_coords.append(self.rotate_vertice_about_point(
                                   first_vertice, centroid, angle))
            else:
                new_coords.insert(0, self.rotate_vertice_about_point(
                                      first_vertice, centroid, angle))
            first_vertice = first_vertice.next

        return Polygon(new_coords, clockwise)


    def translate_polygon(self, translation, clockwise = False):
        """
        Follows similar form to rotate_polygon.  Traverses polygon
        and creates new initialization list by translating each
        coordinate.  It then uses this list to return a new polygon.
        """
        new_coords = []
        first_vertice = self.head
        sentinel = first

        new_coords.append(
            self.translate_vertice(first_vertice, translation))
        """ Traversal """
        first_vertice = first_vertice.next
        while first_vertice != sentinel:
            if self.orientation:
                new_coords.append(
                    self.translate_vertice(first_vertice, translation))
            else:
                new_coords.insert(0, self.translate_vertice(
                                 first_vertice, translation))
            first_vertice = first.next

        return Polygon(new_coords, clockwise)


    def scale_polygon(self, scale, clockwise = False):
        """
        Similar to translate_polygon, traverses polygon creating a
        new coordinate list to initialize a scaled polygon.
        """
        """
        We are not allowing degenerate polygons.  Due to computer
        restrictions, may have to change this to limit lower size.
        Could use largest distance between two vertices as a judge.
        """
        if scale == 0:
            raise ValueError('Resultant polygon would be too small')

        new_coords    = []
        centroid      = self.centroid()
        first_vertice = self.head
        sentinel      = first_vertice

        new_coords.append(
            self.scale_vertice_from_point(first_vertice, centroid, abs(scale)))
        """ Traversal """
        first_vertice = first.next
        while first_vertice != sentinel:
            if self.orientation:
                new_coords.append(
                    self.scale_vertice_from_point(
                        first_vertice, centroid, abs(scale)))
            else:
                new_coords.insert(
                    0, self.scale_vertice_from_point(
                        first_vertice, centroid, abs(scale)))
            first_vertice = first_vertice.next

        return Polygon(new_coords, clockwise)

    """
    The following methods have to do with treating the edges of the
    polygon as line segments.
    """

    def get_edges(self):
        """
        Returns list of line segments in the form [(x1,y1), (x2,y2)].
        Traverses through linked list, adding line segments until
        reaching sentinel vertice.
        """
        first_vertice  = self.head
        second_vertice = self.head.next
        sentinel       = first_vertice
        line_segments  = []
        """ Initial line is added """
        line_segments.append([first_vertice.coord, second_vertice.coord])

        first_vertice  = second_vertice
        second_vertice = first_vertice.next
        """ Start of traversal """
        while first_vertice != sentinel:
            line_segments.append([first_vertice.coord, second_vertice.coord])
            first_vertice  = second_vertice
            second_vertice = first_vertice.next
        """ Assigning list of line segments to polygon attributes """
        self.line_segments = line_segments
        """
        List is used later for determining if any lines intersect
        and so is returned.
        """
        return line_segments


    def get_length(self, line_segment):
        """
        Pythagorean formula is used.  Should add something to
        deal with inaccuracy later.
        """
        return math.sqrt((line_segment[1][1]-line_segment[0][1])**2 +
                         (line_segment[1][0]-line_segment[0][0])**2)


    def get_perimeter(self):
        """
        Traverses identically to in get_edges().  Piggybacks get_length
        while doing so and returns sum of lengths.
        """
        first_vertice = self.head
        second_vertice = first_vertice.next
        sentinel = first_vertice

        segment_lengths = []
        segment_lengths.append(self.get_length(
                          [first_vertice.coord,
                          second_vertice.coord]))

        first_vertice  = second_vertice
        second_vertice = first_vertice.next
        """ Start of traversal """
        while first_vertice != sentinel:
            segment_lengths.append(self.get_length(
                              [first_vertice.coord,
                              second_vertice.coord]))
            first_vertice  = second_vertice
            second_vertice = first_vertice.next
        return sum(segment_lengths)


    def share_edge(self, other):
        """
        Method for determining whether two polygons share
        a particular edge.  Brute force, need to look up
        a nicer way to do this.
        """
        edges_self = self.get_edges()
        edges_othr = other.get_edges()

        for slf in edges_self:
            for otr in edges_othr:
                if slf == otr or slf == [otr[1], otr[0]]:
                    return True
        return False


    def polygon_is_simple(self):
        """
        See Line Intersection Class for details.
        """
        LI = lineintersection.LineIntersection(
                              self.get_edges())
        return not LI.general_intersection()

    """
    The following methods have to do with the area of the
    simple polygon.
    """

    def total_signed_area(self):
        """
        Calculates total signed area of polygon.
        Will be negative if oriented clockwise, and positive if ccw.
        Traverses polygon as in get_edges, calculating what it needs
        from each vertice.  For details on the algorithm, see
        http://www.mathopenref.com/coordpolygonarea2.html.  The area
        found to the left of the line-sigment is calculated and working
        around the polygon, we end up with the total area.  It is very
        important that you cycle in one direction(say cyclically) and
        that it is a simple closed polygon in order for this to work.
        """
        first_vertice     = self.head
        second_vertice    = first_vertice.next
        sentinel          = first_vertice

        """ Formula to calculate each partial area as mentioned above """
        partial_area_calc = lambda x: 1.0*(x[0].coord[0]*x[1].coord[1] -
                                           x[1].coord[0]*x[0].coord[1])

        area              = partial_area_calc([first_vertice, second_vertice])
        first_vertice     = second_vertice
        second_vertice    = first_vertice.next

        while first_vertice != sentinel:
            area += partial_area_calc([first_vertice, second_vertice])
            first_vertice  = second_vertice
            second_vertice = first_vertice.next

        return 0.5*area


    def total_area(self):
        """
        Calculates total absolute area of polygon.
        It is the invariant from the signed area.
        """
        return abs(self.total_signed_area())

    """
    The following methods have to do with the
    properties of the simple polygon.
    """

    def centroid(self):
        """
        Calculates centroid based on formulae found at
        http://en.wikipedia.org/wiki/Centroid
        Again, we traverse through the polygon as before
        with a sentinel, and make calculations at each
        point in order to combine them to find the centroid,
        which ends up being a sort of weighted average of each
        of the calculations (see the wiki).
        """
        signed_area    = self.total_signed_area()
        first_vertice  = self.head
        second_vertice = first_vertice.next
        sentinel       = first_vertice
        helper_fn      = lambda x: 1.0*(x[0].coord[0]*x[1].coord[1] -
                                        x[1].coord[0]*x[0].coord[1])
        """ First calculations: """
        centroid_x = (1.0*(first_vertice.coord[0] + second_vertice.coord[0]) *
                                  helper_fn([first_vertice, second_vertice]))
        centroid_y = (1.0*(first_vertice.coord[1] + second_vertice.coord[1]) *
                                  helper_fn([first_vertice, second_vertice]))

        first_vertice  = second_vertice
        second_vertice = first_vertice.next
        """ Traversal """
        while first_vertice != sentinel:
            centroid_x += (1.0*(first_vertice.coord[0] + second_vertice.coord[0]) *
                                       helper_fn([first_vertice, second_vertice]))
            centroid_y += (1.0*(first_vertice.coord[1] + second_vertice.coord[1]) *
                                       helper_fn([first_vertice, second_vertice]))
            first_vertice  = second_vertice
            second_vertice = first_vertice.next

        return ((1/(6*signed_area))*centroid_x, (1/(6*signed_area))*centroid_y)

    def vertice_is_convex(self, vertice):

        """
        Checks if angle made by vertex.prev - vertex - vertex.next
        is convex relative to polygon.  Uses sign of triple product
        of vectors which gives orientation.  CCW = +, CW = -.
        If same orientation as cycling then convex, else concave.
        eg. If vertices are cycling clockwise and signed_area is
        negative then returns True.  Signed_area = 0 happens when
        triangle is degenerate.  For more information look up
        triple products and signed areas of polygons.
        This calculates the signed area of the triangle created by
        the above sequence, and checks if it matches the orientation
        of the polygon.
        """
        """
        We will use x, y, z as variables for space issues. They
        correspond to the coordinates of the previous, vertice_to_test,
        and the next vertice respectively.
        """
        x = vertice.prev.coord
        y = vertice.coord
        z = vertice.next.coord

        signed_area = (x[0]*y[1] + y[0]*z[1] + z[0]*x[1] -
                       y[0]*x[1] - z[0]*y[1] - x[0]*z[1])

        if self.orientation:
            return True if signed_area < 0 else False
        else:
            return True if signed_area > 0 else False


    def polygon_is_convex(self):
        """ Applies all_convex_vertices and analyzes """
        self.all_convex_vertices()
        return True if not self.concave_vertices else False


    def all_convex_vertices(self):
        """
        Traverses through polygon using a sentinel to stop,
        applying vertice_is_convex at each vertice.
        """
        """ Resetting self.convex/concave """
        self.convex_vertices  = []
        self.concave_vertices = []

        cursor   = self.head
        sentinel = cursor

        if self.vertice_is_convex(cursor):
            self.convex_vertices.append(cursor.coord)
        else:
            self.concave_vertices.append(cursor.coord)

        cursor = cursor.next
        while cursor != sentinel:

            if self.vertice_is_convex(cursor):
                self.convex_vertices.append(cursor.coord)
            else:
                self.concave_vertices.append(cursor.coord)

            cursor = cursor.next


    def __repr__(self):
        return '%s-gon at %s' % (self.vertice_number, self.head)

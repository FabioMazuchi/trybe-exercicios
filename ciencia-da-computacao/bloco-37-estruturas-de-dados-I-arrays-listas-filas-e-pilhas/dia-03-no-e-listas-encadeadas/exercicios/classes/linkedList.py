from node import Node
from rich import print


class LinkedList:
    def __init__(self):
        self.head = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head
        self.head = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)
        actual_last_value = self.__get_node_at(len(self) - 1)
        actual_last_value.next = new_last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head
        if value_to_be_removed:
            self.head = self.head.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.head

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
        while not self.is_empty():
            self.remove_first()

    def __get_node_at(self, position):
        value_to_be_returned = self.head
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def index_of(self, value):
        position = 1
        current_value = self.head
        while current_value:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1

    def delete_duplicates(self):
        list_unique_elements = self
        while self:
            current_node = self.remove_first()
            if list_unique_elements.index_of(current_node) == -1:
                list_unique_elements.insert_last(current_node.value)
        return list_unique_elements


# __get_node_at: O(n)
# insert_at: O(n)
# insert_last: O(1)
# remove_last: O(1)
# remove_at: O(n)
# get_element_at: O(n)
# index_of: O(n)
# delete_duplicates: O(n)

if __name__ == "__main__":
    list = LinkedList()

    # list.insert_first("Fábio")
    # print(list)

    # list.insert_last("Maria")
    # print(list)
    # print(list.index_of("Fábio"))
    # print(list.index_of(""))
    # print(list.index_of("Maria"))

    # list.insert_at("Xablau", 0)
    # print(list)

    # list.remove_at(0)
    # print(list)

    # print(list.get_element_at(1))

    # list.clear()
    # print(list)

    list.insert_first(0)
    list.insert_last(1)
    list.insert_last(1)
    list.insert_last(1)
    print(list)
    print(list.delete_duplicates())
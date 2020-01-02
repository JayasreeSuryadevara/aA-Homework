require 'set'

class GraphNode

    attr_reader :value, :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end

    def neighbors=(newNeighbors)
        newNeighbors.each { |node| neighbors << node }
        # neighbors += newNeighbors
    end

    def add_neighbor(node)
        self.neighbors << node
    end

end

def bfs(starting_node,target_value)
        # Start with the starting node
        queue = [starting_node]

        # Store visited nodes in a set to not revisit them
        visited = Set.new()

        # Compare the first node to target and if not correct 
        # shift it out and add its children to the end of queue
        until queue.empty?

            node = queue.shift

            unless visited.include?(node)
                return node.value if node.value == target_value
                visited.add(node)
                queue+= node.neighbors
            end

        end

        return nil # if target was not found

    end

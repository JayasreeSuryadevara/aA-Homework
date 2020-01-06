# Find the longest fish in O(n^2) efficiency
# two nested loops = n^2 complexity
# Quadratic search
def sluggish_octopus(fish)
    longest = ""
    (0...fish.length).each do |idx1|
        (idx1+1...fish.length).each do |idx2|
            longest = fish[idx1].length > fish[idx2].length ? fish[idx1] : fish[idx2]
        end
    end
    longest
end

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p "Took O(n^2) complexity : Quadratic Search"
p sluggish_octopus(fish)

# Write a O(nlogn) complexity algorithm
# Using merge-sort

class Array
    def merge_sort(&prc)
        prc ||= Proc.new{ |a,b| a <=> b }

        return self if count <= 1

        middle = count/2

        left = self.take(middle).merge_sort(&prc)
        right = self.drop(middle).merge_sort(&prc)

        Array.merge(left,right,&prc)

    end

    def self.merge(left,right,&prc)

        merged = []

        until left.empty? || right.empty?
            case prc.call(left.first,right.first)
            when -1 
                merged << left.shift
            when 0 
                merged << left.shift   
            when 1
                merged << right.shift
            end
        end

        merged.concat(left)
        merged.concat(right)
        merged

    end
end


def dominant_octopus(fish)
    sorted = fish.merge_sort { |a,b| a.length <=> b.length }
    sorted.last
end


fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p "Took O(nlogn) Complexity"
p dominant_octopus(fish)

# search with O(n) complexity
# Linear Search

def clever_octopus(fish)
    longest = fish.first
    (1...fish.length).each do |i|
        longest = fish[i] if fish[i].length > longest.length
    end
    longest
end

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p " O(n) complexity : Linear Search"
p clever_octopus(fish)

# linear octopus dance
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end

p slow_dance("up",tiles_array)
# constant octopus dance
#use a hash for constant lookup
tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end

p fast_dance("up", tiles_hash)


const rounds: [string, string][] = [['C', 'Y'], ['C', 'Y'], ['B', 'Y'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'Y'], ['B', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'X'], ['C', 'Y'], ['B', 'Z'], ['C', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['C', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['C', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['A', 'Y'], ['A', 'Y'], ['C', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['C', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['C', 'Y'], ['C', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'Y'], ['B', 'X'], ['C', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['C', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['C', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['C', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'Z'], ['A', 'Z'], ['A', 'X'], ['C', 'Y'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['A', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['C', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['C', 'X'], ['B', 'Z'], ['A', 'Z'], ['A', 'Y'], ['C', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['C', 'Z'], ['C', 'X'], ['C', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['C', 'Y'], ['A', 'Z'], ['B', 'Z'], ['C', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['B', 'Y'], ['C', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'X'], ['C', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['C', 'X'], ['C', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['C', 'X'], ['A', 'Y'], ['C', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['C', 'Y'], ['C', 'X'], ['B', 'Z'], ['C', 'Y'], ['A', 'Y'], ['A', 'Y'], ['C', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['C', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['A', 'Z'], ['B', 'X'], ['C', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['B', 'X'], ['C', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['C', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['A', 'Y'], ['C', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['C', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['A', 'X'], ['C', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['C', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'X'], ['C', 'X'], ['B', 'Z'], ['C', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['A', 'X'], ['C', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['A', 'X'], ['B', 'X'], ['C', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['C', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['C', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['C', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'X'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['C', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'Z'], ['A', 'Y'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['C', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['C', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['C', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['C', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['C', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['C', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['A', 'Z'], ['C', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['C', 'X'], ['A', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['C', 'X'], ['A', 'Y'], ['C', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['C', 'Y'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['C', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['A', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['C', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['C', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['C', 'Y'], ['C', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['C', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['C', 'X'], ['C', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['A', 'Z'], ['C', 'X'], ['B', 'X'], ['C', 'Y'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['A', 'Y'], ['C', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['C', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['C', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['C', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['C', 'Y'], ['B', 'X'], ['C', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['C', 'Z'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'X'], ['A', 'Z'], ['B', 'Y'], ['A', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['C', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'X'], ['A', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['C', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['C', 'Z'], ['B', 'Z'], ['A', 'Z'], ['A', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['C', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['C', 'X'], ['A', 'Y'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['C', 'Y'], ['A', 'Z'], ['C', 'Y'], ['C', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['A', 'Y'], ['B', 'Y'], ['A', 'Y'], ['A', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['C', 'Y'], ['B', 'Z'], ['B', 'X'], ['C', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['C', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['C', 'Y'], ['B', 'X'], ['C', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['A', 'X'], ['A', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['C', 'X'], ['C', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['C', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['C', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Y'], ['C', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['B', 'Y'], ['C', 'X'], ['B', 'X'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['A', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['C', 'X'], ['B', 'X'], ['A', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Z'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'Y'], ['B', 'Y'], ['C', 'X'], ['C', 'Z'], ['B', 'X'], ['A', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['C', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['C', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['A', 'Y'], ['A', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'Y'], ['C', 'Y'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['C', 'Y'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Y'], ['A', 'Y'], ['C', 'Z'], ['A', 'X'], ['A', 'Y'], ['B', 'X'], ['B', 'X'], ['C', 'Z'], ['B', 'Y'], ['A', 'Y'], ['A', 'Y'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['C', 'Y'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['C', 'Y'], ['B', 'Z'], ['A', 'Z'], ['C', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'X'], ['C', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['C', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['C', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['C', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['A', 'Z'], ['A', 'Y'], ['C', 'Z'], ['B', 'Z'], ['B', 'Y'], ['C', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['C', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['B', 'Y'], ['C', 'Z'], ['B', 'X'], ['B', 'Y'], ['C', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['C', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['C', 'Y'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Y'], ['B', 'Y'], ['C', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['A', 'Z'], ['C', 'X'], ['A', 'Y'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['C', 'Z'], ['B', 'Y'], ['C', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['A', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Y'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Y'], ['A', 'X'], ['C', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['C', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['A', 'Y'], ['C', 'Y'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['C', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['C', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['C', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['C', 'X'], ['B', 'Z'], ['A', 'Z'], ['C', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['B', 'Y'], ['A', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['C', 'X'], ['C', 'Y'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['C', 'Z'], ['A', 'X'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['C', 'X'], ['A', 'Y'], ['C', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['C', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['C', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['A', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['C', 'X'], ['B', 'Y'], ['A', 'X'], ['C', 'X'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['B', 'X'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'Z'], ['C', 'Y'], ['A', 'X'], ['B', 'X'], ['C', 'X'], ['B', 'X'], ['A', 'Z'], ['A', 'X'], ['B', 'Y'], ['C', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'Z'], ['A', 'X'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['A', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X'], ['A', 'Y'], ['C', 'Z'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'X'], ['C', 'X'], ['B', 'Z'], ['C', 'X'], ['B', 'Z'], ['C', 'Y'], ['A', 'Y'], ['C', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['A', 'X'], ['A', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Z'], ['B', 'X'], ['B', 'X'], ['B', 'X'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['B', 'Y'], ['B', 'X'], ['A', 'Z'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'X'], ['A', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['C', 'X'], ['C', 'X'], ['B', 'Y'], ['A', 'Y'], ['A', 'Z'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['A', 'Y'], ['B', 'Y'], ['C', 'X'], ['B', 'Z'], ['A', 'Y'], ['B', 'X'], ['C', 'Z'], ['B', 'X'], ['B', 'Y'], ['A', 'Y'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'X'], ['B', 'Y'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Y'], ['B', 'Y'], ['B', 'Y'], ['A', 'X'], ['B', 'X'], ['B', 'Y'], ['B', 'Z'], ['A', 'Y'], ['A', 'X'], ['B', 'X'], ['B', 'Z'], ['B', 'Z'], ['C', 'X'], ['A', 'Z'], ['B', 'Z'], ['A', 'X'], ['A', 'Y'], ['C', 'X'], ['B', 'Z'], ['B', 'Z'], ['A', 'X'], ['B', 'X'], ['A', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Z'], ['B', 'X'], ['A', 'Z'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['A', 'Y'], ['B', 'Y'], ['B', 'Z'], ['A', 'X'], ['B', 'Y'], ['A', 'X'], ['A', 'Y'], ['A', 'X'], ['A', 'X'], ['B', 'Y'], ['A', 'Z'], ['B', 'Z'], ['A', 'Y'], ['B', 'Z'], ['A', 'Z'], ['A', 'Y'], ['B', 'Z'], ['B', 'Y'], ['B', 'Z'], ['B', 'X']];

let sumOfRoundScores = 0;
for (let round of rounds) {

    let roundScore = 0;

    const theirMove = round[0];
    const yourMove = round[1];

    // Points for shape
    switch (yourMove) {
        case 'X':
            roundScore += 1;
            break;
        case 'Y':
            roundScore += 2;
            break;
        case 'Z':
            roundScore += 3;
            break;
    }

    // Points for round result
    switch (theirMove) {
        case 'A':
            switch (yourMove) {
                case 'X':
                    roundScore += 3;
                    break;
                case 'Y':
                    roundScore += 6;
                    break;
            }
            break;
        case 'B':
            switch (yourMove) {
                case 'Y':
                    roundScore += 3;
                    break;
                case 'Z':
                    roundScore += 6;
                    break;
            }
            break;
        case 'C':
            switch (yourMove) {
                case 'Z':
                    roundScore += 3;
                    break;
                case 'X':
                    roundScore += 6;
                    break;
            }
            break;
    }

    sumOfRoundScores += roundScore;
}

console.log(sumOfRoundScores); // Problem 1 Solution

let sumOfRoundScores2 = 0;
for (let round of rounds) {

    let roundScore = 0;

    const theirMove = round[0];
    const roundResult = round[1];

    // Calculate your move
    let yourMove: string;
    switch (theirMove) {
        case 'A':
            switch (roundResult) {
                case 'X':
                    yourMove = 'Z';
                    break;
                case 'Y':
                    yourMove = 'X';
                    break;
                case 'Z':
                    yourMove = 'Y';
                    break;
            }
            break;
        case 'B':
            switch (roundResult) {
                case 'X':
                    yourMove = 'X';
                    break;
                case 'Y':
                    yourMove = 'Y';
                    break;
                case 'Z':
                    yourMove = 'Z';
                    break;
            }
            break;
        case 'C':
            switch (roundResult) {
                case 'X':
                    yourMove = 'Y';
                    break;
                case 'Y':
                    yourMove = 'Z';
                    break;
                case 'Z':
                    yourMove = 'X';
                    break;
            }
            break;
    }

    // Points for shape
    switch (yourMove!) {
        case 'X':
            roundScore += 1;
            break;
        case 'Y':
            roundScore += 2;
            break;
        case 'Z':
            roundScore += 3;
            break;
    }

    // Points for round result
    switch (roundResult) {
        case 'Y':
            roundScore += 3;
            break;
        case 'Z':
            roundScore += 6;
            break;
    }

    sumOfRoundScores2 += roundScore;
}

console.log(sumOfRoundScores2); // Problem 2 Solution

export {}
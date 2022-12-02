data FirstChar = A | B | C
data SecondChar = X | Y | Z

data Move = Rock | Paper | Scissors deriving (Eq, Show) -- TODO Can remove Show
data Result = Win | Draw | Lose

data TheirMove = TheirMove Move
data YourMove  = YourMove  Move

beat :: Move -> Move
beat Scissors = Rock
beat Rock     = Paper
beat Paper    = Scissors

play :: TheirMove -> YourMove -> Result
play (TheirMove theirs) (YourMove yours)
    | theirs == yours       = Draw
    | beat theirs == yours  = Win
    | otherwise             = Lose

getMoveForResult :: TheirMove -> Result -> YourMove
getMoveForResult (TheirMove m) Draw = YourMove m
getMoveForResult (TheirMove m) Win  = YourMove (beat m)
getMoveForResult (TheirMove m) Lose = YourMove (beat $ beat m)

readFirstMove :: FirstChar -> TheirMove
readFirstMove c = case c of
    A -> TheirMove Rock
    B -> TheirMove Paper
    C -> TheirMove Scissors

readSecondMove :: SecondChar -> YourMove
readSecondMove c = case c of
    X -> YourMove Rock
    Y -> YourMove Paper
    Z -> YourMove Scissors

readRoundResult :: SecondChar -> Result
readRoundResult c = case c of
    X -> Lose
    Y -> Draw
    Z -> Win

roundPoints :: YourMove -> Result -> Int
roundPoints (YourMove m) r = resultPoints + shapeBonus
    where
        resultPoints = case r of
            Win -> 6
            Draw -> 3
            Lose -> 0
        shapeBonus = case m of
            Rock -> 1
            Paper -> 2
            Scissors -> 3

rounds :: [(FirstChar, SecondChar)]
rounds = [(C, Y), (C, Y), (B, Y), (A, Z), (B, Z), (A, X), (A, Y), (A, Y), (A, X), (A, Y), (B, Y), (A, Y), (B, Y), (B, Y), (B, Z), (B, Z), (B, Z), (B, Z), (A, Y), (B, Z), (A, Y), (B, X), (B, Y), (B, X), (A, X), (A, X), (B, Z), (A, X), (A, X), (B, Z), (B, Z), (B, Y), (B, Z), (B, Z), (B, Z), (B, Y), (A, X), (A, X), (B, Z), (A, X), (B, X), (B, X), (C, Y), (B, Z), (C, X), (A, X), (A, Y), (B, Y), (A, Y), (B, X), (A, X), (B, Y), (B, Z), (B, Z), (B, Y), (B, Z), (C, Z), (B, X), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (A, Y), (B, X), (A, X), (C, X), (B, Y), (B, Z), (A, Y), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (B, Y), (B, Z), (A, X), (B, X), (B, X), (A, X), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, Y), (B, X), (B, Z), (A, X), (A, Y), (B, Z), (A, Y), (B, Z), (B, Y), (B, Z), (A, X), (B, Y), (A, Y), (B, Z), (A, Z), (A, Y), (A, Y), (C, Y), (B, Z), (B, X), (A, Z), (B, Z), (A, X), (B, Z), (A, Z), (B, Z), (A, X), (B, Y), (A, X), (B, Y), (B, Z), (B, X), (B, X), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (A, X), (B, X), (B, Z), (A, X), (C, Z), (B, Z), (B, Z), (B, Y), (B, Y), (B, Y), (B, Z), (B, Z), (A, Y), (B, Z), (B, Z), (C, Y), (C, Z), (A, X), (B, Z), (B, X), (B, Z), (B, Z), (B, Y), (A, X), (B, Z), (B, Y), (A, Z), (B, Z), (A, X), (A, X), (B, Y), (A, Y), (B, Z), (B, Z), (B, X), (B, Y), (A, X), (A, Y), (B, X), (C, Z), (A, Y), (B, Z), (B, Z), (B, Z), (A, Z), (C, Y), (B, Y), (B, Y), (B, Z), (C, Y), (B, Y), (B, X), (B, X), (B, Z), (C, Z), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, X), (B, X), (A, X), (A, Z), (A, Z), (A, X), (C, Y), (B, X), (A, X), (A, Y), (A, X), (B, X), (A, Y), (B, Z), (B, Z), (A, Y), (A, X), (B, Y), (B, Z), (B, Z), (A, X), (A, Z), (B, Z), (B, X), (A, X), (B, Z), (B, Y), (A, Y), (A, Z), (B, X), (A, Y), (B, Z), (A, Z), (B, Z), (A, Y), (B, Z), (B, X), (B, Y), (A, Y), (B, Z), (B, Z), (A, X), (A, X), (B, Y), (B, Z), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (A, Z), (B, Z), (B, Z), (B, X), (A, Y), (C, X), (B, Z), (B, Y), (B, Y), (B, Z), (B, Z), (B, Z), (B, Y), (B, X), (B, Y), (C, X), (B, Z), (A, Z), (A, Y), (C, X), (A, X), (B, X), (A, X), (B, X), (A, Y), (B, Z), (A, Y), (A, Y), (B, Z), (B, X), (B, Z), (A, Y), (B, Z), (B, X), (C, Z), (C, X), (C, Z), (B, Y), (B, X), (B, Z), (B, Z), (B, Y), (B, Z), (B, Y), (B, Z), (A, X), (B, X), (B, Z), (A, X), (B, Z), (B, Y), (B, Z), (A, X), (B, Y), (C, Y), (A, Z), (B, Z), (C, Z), (A, Y), (B, Z), (A, Y), (A, Z), (B, Y), (A, X), (A, X), (B, Z), (B, Z), (B, Z), (A, Y), (B, Z), (A, Z), (B, Z), (A, Y), (A, Z), (B, Y), (C, Z), (B, Z), (A, Z), (B, X), (B, Z), (B, Y), (B, Z), (A, Z), (A, Z), (B, Z), (B, X), (C, Z), (B, X), (B, Z), (B, Y), (A, X), (B, Z), (A, X), (B, X), (B, Z), (B, Z), (A, X), (B, X), (C, X), (C, X), (B, X), (B, Y), (B, Z), (B, X), (B, Y), (B, Y), (B, Z), (A, Z), (B, Z), (C, X), (A, Y), (C, X), (B, Z), (A, Y), (B, Z), (B, Y), (B, Z), (B, X), (A, X), (B, X), (B, Z), (A, Y), (A, Y), (B, Z), (B, Z), (B, Z), (A, Y), (B, Z), (B, X), (C, X), (B, Z), (B, Z), (C, Y), (B, Z), (C, Y), (B, Z), (C, Y), (C, X), (B, Z), (C, Y), (A, Y), (A, Y), (C, Z), (B, Z), (B, X), (B, Z), (B, X), (C, Z), (B, Z), (A, Z), (B, Z), (C, Y), (B, Z), (A, X), (A, Y), (B, Y), (B, Y), (B, Z), (A, Y), (B, X), (B, Z), (B, Z), (A, Z), (B, X), (A, Y), (A, Y), (B, Z), (B, Z), (B, Z), (C, X), (A, Z), (B, X), (C, Z), (B, Y), (B, Z), (B, X), (A, Y), (B, Z), (A, X), (B, X), (B, Y), (A, Y), (B, Z), (B, Z), (B, Y), (A, Z), (B, Z), (A, X), (B, Y), (A, Y), (A, X), (A, Y), (A, X), (A, X), (B, X), (B, Y), (B, X), (B, Y), (B, Z), (B, Y), (B, X), (A, X), (B, Z), (A, Z), (A, X), (B, Z), (B, Y), (A, X), (B, Y), (A, X), (B, X), (C, Y), (B, X), (B, X), (B, X), (C, Y), (B, X), (B, Y), (B, Y), (B, Y), (B, Y), (B, X), (A, Y), (C, Y), (B, Z), (B, Z), (B, X), (B, Z), (C, Y), (B, Y), (B, Z), (B, Z), (B, Y), (B, Z), (A, X), (B, X), (B, Y), (A, X), (C, Y), (B, Z), (A, Y), (B, Z), (B, Z), (B, Z), (A, X), (B, Y), (B, Z), (B, Y), (B, Z), (A, X), (B, Z), (A, X), (B, Y), (B, Y), (B, X), (B, X), (A, Y), (B, Z), (C, Y), (A, X), (A, X), (B, X), (B, Z), (B, X), (B, X), (B, Z), (B, Z), (A, X), (B, X), (B, Z), (A, Z), (B, Y), (A, X), (B, Z), (C, Y), (B, Z), (B, X), (B, Z), (B, Z), (A, Y), (A, Y), (B, Z), (B, X), (B, Y), (B, Z), (A, Y), (A, Y), (B, X), (B, X), (C, X), (B, Z), (C, Z), (B, X), (A, Y), (B, Z), (A, Z), (B, Y), (A, Y), (B, Z), (B, X), (B, X), (A, Y), (B, Z), (B, Y), (A, X), (B, Y), (B, Y), (B, Y), (B, X), (B, Y), (B, Z), (B, Y), (B, Y), (A, X), (C, Z), (B, Z), (B, Z), (A, Z), (B, Z), (B, Z), (A, X), (B, X), (A, Y), (A, X), (B, X), (C, X), (B, X), (B, Z), (B, Y), (A, Z), (A, Y), (B, Y), (B, Z), (B, X), (B, X), (B, Z), (B, Z), (B, Y), (A, X), (B, Z), (A, Y), (A, X), (B, Y), (B, Z), (B, Z), (B, X), (A, X), (A, Y), (C, X), (A, Y), (B, Z), (B, Y), (B, Z), (B, Z), (C, Z), (B, Z), (B, X), (A, X), (C, Y), (B, X), (B, Z), (A, Z), (A, X), (A, Y), (B, Z), (B, Z), (A, Y), (A, Y), (B, X), (A, Y), (A, Y), (B, Z), (A, Y), (B, Y), (B, Z), (A, Y), (A, Z), (B, X), (B, X), (B, Y), (B, Z), (B, Z), (A, X), (B, X), (C, X), (B, Y), (A, Y), (A, X), (A, X), (A, X), (B, Y), (A, X), (A, Z), (A, Y), (B, X), (A, Y), (B, Z), (C, X), (B, X), (B, X), (B, Z), (B, X), (B, X), (B, Z), (A, X), (B, Z), (B, X), (B, Z), (A, Y), (B, Y), (B, Z), (B, Y), (B, Z), (B, Z), (A, X), (B, Z), (A, Y), (C, Z), (A, Y), (B, Z), (A, Y), (B, X), (B, Z), (B, X), (C, Y), (A, X), (B, Z), (B, Y), (A, X), (A, X), (B, X), (B, Z), (A, Z), (B, Z), (B, X), (B, X), (B, X), (B, Z), (B, Z), (B, Y), (B, X), (B, X), (A, X), (B, Z), (B, X), (A, X), (A, X), (A, X), (B, X), (B, Z), (A, Z), (B, X), (B, Y), (B, Y), (B, Z), (B, Z), (C, Z), (A, Y), (A, X), (B, Y), (B, X), (B, Z), (B, X), (A, X), (B, Z), (B, Z), (B, Y), (B, Z), (B, X), (B, Z), (B, Z), (B, X), (B, X), (A, X), (A, X), (B, X), (B, Z), (B, Z), (C, X), (C, X), (B, Z), (B, Z), (B, X), (B, Z), (B, Y), (B, X), (A, X), (B, Y), (A, Y), (A, X), (B, Z), (B, Z), (C, X), (B, Y), (B, Z), (B, Z), (B, X), (B, Z), (B, Z), (C, Z), (B, Z), (B, Y), (B, Z), (B, X), (A, X), (B, X), (B, Z), (B, Z), (A, Y), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Z), (B, X), (B, Y), (B, Y), (B, Z), (A, X), (B, Z), (B, Y), (B, X), (A, X), (B, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (A, Y), (B, Z), (C, X), (B, Y), (B, Y), (B, Y), (A, Y), (B, Z), (B, Z), (A, X), (C, Z), (B, Z), (B, Z), (B, Z), (B, X), (B, Z), (A, Z), (B, Z), (B, Z), (B, Z), (A, Z), (B, Z), (C, Y), (B, X), (A, X), (A, Y), (B, Z), (B, Z), (A, Z), (B, Z), (B, X), (A, Z), (B, Y), (B, Z), (B, X), (B, Z), (B, X), (B, Y), (B, Z), (A, X), (B, Z), (B, Z), (A, Y), (B, X), (B, X), (B, X), (A, Z), (C, X), (A, Z), (B, Z), (B, Z), (B, Z), (B, X), (A, Y), (C, X), (A, Z), (A, Y), (B, X), (B, Z), (B, X), (B, Z), (B, Y), (A, Y), (B, X), (C, X), (A, Y), (C, Z), (A, X), (B, Z), (B, Z), (A, Z), (B, X), (B, Y), (B, Z), (A, Y), (B, Y), (A, X), (A, X), (C, Y), (A, Y), (B, X), (A, X), (B, Y), (B, X), (B, Y), (A, Y), (A, X), (C, Y), (B, Y), (B, Y), (B, Z), (B, Y), (B, X), (B, Z), (B, Z), (B, X), (A, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Z), (B, X), (B, Z), (B, Z), (B, Y), (B, Y), (B, X), (A, X), (B, Z), (B, Y), (A, Y), (B, Z), (B, X), (B, Z), (B, Z), (A, Z), (B, Z), (A, Y), (B, Z), (A, X), (B, Z), (B, Z), (A, Y), (B, Z), (A, X), (B, Z), (A, Y), (A, Y), (A, Z), (B, X), (B, Z), (B, Y), (A, Z), (C, Z), (B, Z), (A, X), (A, X), (B, X), (A, Z), (B, X), (B, X), (B, Z), (C, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, X), (A, Z), (A, Y), (B, Z), (B, Y), (C, Z), (B, Y), (B, Z), (A, Y), (B, X), (B, X), (B, Z), (A, X), (A, Y), (B, Z), (B, X), (B, Y), (A, Y), (C, Y), (C, Y), (B, Z), (A, Y), (B, Y), (A, Y), (B, Z), (B, Z), (A, X), (B, X), (A, X), (B, X), (A, Y), (A, X), (B, Z), (A, X), (B, Z), (B, X), (B, Z), (B, X), (B, X), (A, X), (A, Y), (B, Z), (B, X), (B, X), (A, X), (A, Y), (A, X), (B, Y), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (B, X), (B, Y), (A, Y), (B, X), (B, Z), (A, Y), (B, X), (A, X), (B, Z), (C, X), (B, Y), (A, Y), (A, X), (A, X), (B, X), (B, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Y), (B, X), (B, Z), (B, X), (B, Y), (B, X), (B, Z), (B, X), (B, Y), (B, X), (B, Z), (B, Z), (B, Z), (A, X), (C, X), (C, Y), (A, Y), (B, X), (B, X), (A, Y), (B, Z), (B, X), (B, Z), (B, X), (B, X), (C, X), (B, Z), (B, Z), (B, Y), (A, Z), (A, Z), (C, X), (B, X), (C, Y), (B, Z), (C, X), (B, Z), (A, Y), (C, Z), (B, X), (B, Y), (A, Y), (B, Y), (B, X), (B, Z), (A, Y), (A, Z), (C, X), (B, Z), (A, X), (B, X), (B, Z), (C, Z), (A, Y), (B, Z), (B, Z), (A, X), (A, X), (B, Z), (B, Y), (C, Z), (B, Z), (B, X), (B, Z), (A, X), (A, X), (B, Y), (A, X), (B, X), (A, Y), (B, Z), (A, Y), (B, Z), (A, Y), (B, Z), (A, X), (B, Y), (B, Z), (B, Z), (B, Z), (A, X), (A, X), (B, X), (B, Z), (A, X), (B, Z), (A, X), (A, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Y), (B, Z), (B, Z), (B, X), (B, Z), (B, Y), (B, Z), (C, Y), (B, X), (C, Z), (B, Z), (B, Z), (A, Y), (B, Z), (B, X), (A, Y), (B, Z), (B, X), (B, Z), (B, Z), (B, Y), (B, Z), (A, Z), (A, Y), (B, Z), (B, Z), (B, Y), (A, Y), (B, Z), (A, X), (B, X), (A, Z), (A, X), (B, X), (B, Z), (B, X), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (B, Y), (B, Z), (B, Z), (A, X), (B, X), (B, Y), (B, Y), (C, Z), (A, X), (B, Y), (A, Y), (B, Z), (B, Z), (B, Z), (C, X), (B, X), (A, Z), (B, Y), (A, X), (C, X), (B, Z), (B, Z), (B, Z), (B, Y), (A, Y), (A, Y), (B, Y), (B, Z), (B, Z), (B, Z), (C, X), (A, X), (B, Z), (A, Y), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, X), (B, Y), (B, Z), (B, Z), (A, Y), (C, X), (A, X), (B, Z), (B, Z), (A, Y), (A, Y), (B, Z), (A, Y), (B, Y), (A, X), (B, Z), (B, Z), (A, Y), (B, Z), (B, Z), (A, X), (A, X), (B, X), (B, Z), (B, Z), (A, X), (B, Z), (B, Z), (C, Y), (B, Z), (A, X), (B, Z), (A, X), (B, Z), (A, X), (B, X), (A, X), (A, Y), (B, Z), (B, X), (A, X), (B, Z), (A, X), (A, Z), (B, Z), (B, Z), (B, Z), (A, Y), (B, X), (A, X), (B, Y), (A, Y), (B, Z), (B, Z), (B, X), (B, Z), (B, X), (B, X), (A, X), (B, Z), (A, Y), (A, X), (B, X), (A, Z), (B, X), (B, Y), (B, Z), (B, X), (B, X), (B, Z), (C, X), (A, X), (B, Z), (B, Y), (C, Z), (B, Z), (A, Z), (A, Z), (A, X), (A, Y), (B, Z), (B, Z), (B, X), (A, Z), (B, Z), (B, Z), (B, X), (B, Y), (B, X), (B, Z), (B, X), (B, Z), (A, Y), (A, X), (B, Z), (B, X), (B, Y), (B, Z), (B, Z), (B, Z), (B, Z), (C, X), (C, X), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (C, Y), (B, Z), (B, Y), (B, Z), (A, Z), (A, Y), (B, Z), (A, Y), (C, X), (A, X), (B, X), (A, Y), (B, Z), (A, Y), (B, Z), (B, Y), (B, Z), (B, Z), (C, Y), (B, Y), (B, Z), (B, Z), (B, X), (B, Y), (B, Z), (B, Y), (B, Z), (B, X), (B, Y), (B, Z), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (B, Z), (C, X), (B, Z), (A, Y), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (B, Z), (A, Y), (B, Z), (A, Z), (C, X), (A, Y), (A, Y), (A, X), (B, Z), (A, X), (C, Y), (A, Z), (C, Y), (C, X), (B, Z), (A, X), (A, Y), (B, Z), (B, Z), (B, Z), (B, Z), (B, Y), (A, Z), (A, Y), (B, Y), (A, Y), (A, Z), (B, X), (B, Z), (B, Z), (A, X), (C, Y), (B, Z), (B, X), (C, X), (A, Z), (B, Z), (B, X), (B, Y), (A, X), (A, X), (B, Z), (C, X), (B, Z), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Y), (B, Z), (B, Z), (B, Y), (B, X), (A, X), (B, Z), (A, X), (A, X), (B, Y), (B, Z), (B, X), (A, Y), (C, X), (B, Y), (A, X), (A, X), (A, X), (C, Y), (B, X), (C, Z), (A, X), (B, Z), (A, Z), (B, Z), (A, X), (A, Y), (B, Z), (A, X), (B, X), (A, Y), (A, X), (A, Y), (B, X), (B, Y), (B, Z), (B, Y), (C, X), (C, Y), (B, Z), (B, Y), (B, Z), (A, X), (C, Z), (B, Z), (A, X), (B, X), (A, X), (B, X), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (A, X), (A, X), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, X), (A, X), (C, Z), (A, Y), (B, Z), (A, Y), (B, Z), (B, Z), (B, Z), (C, Z), (B, Z), (B, Z), (A, X), (B, X), (A, X), (B, X), (A, X), (B, Z), (B, Z), (B, X), (B, Z), (A, X), (A, Y), (A, Y), (A, Y), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Z), (B, Y), (B, Z), (A, Z), (B, Z), (A, Y), (B, Y), (B, Y), (C, Y), (B, X), (B, Z), (B, Y), (B, Z), (B, Y), (B, Z), (B, Z), (A, Y), (B, X), (A, Z), (B, Z), (A, X), (B, Y), (A, X), (B, Z), (B, Y), (A, X), (B, X), (B, Z), (B, Z), (B, Z), (A, Y), (A, Y), (A, X), (A, Y), (A, Y), (B, X), (B, Z), (B, Y), (B, Y), (B, X), (B, Y), (B, X), (B, X), (B, X), (B, Z), (B, Z), (B, Z), (A, Y), (A, Z), (B, Y), (C, X), (B, X), (B, Z), (C, Y), (B, Z), (C, Y), (B, Z), (B, Z), (B, Z), (B, X), (A, X), (B, Z), (B, Z), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (B, X), (A, X), (A, Y), (B, Y), (B, Z), (B, Y), (B, X), (A, Z), (A, X), (B, X), (B, Y), (B, Z), (B, Z), (B, Z), (B, X), (C, X), (B, X), (A, Z), (A, X), (A, Y), (B, Z), (B, Z), (A, X), (B, Z), (A, Y), (B, X), (B, Z), (B, Y), (B, Y), (A, X), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, Y), (A, Z), (A, Y), (B, X), (A, X), (B, Y), (B, Z), (C, Y), (B, Z), (B, Z), (B, X), (A, Z), (A, Y), (B, Y), (B, Z), (A, Y), (B, Y), (A, Y), (A, X), (A, Y), (B, Y), (C, X), (C, Z), (B, X), (A, Z), (A, X), (B, Y), (B, X), (A, X), (B, Z), (A, Y), (A, Z), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Y), (B, Z), (A, X), (A, Y), (B, Z), (B, X), (C, X), (B, Z), (A, Y), (B, Z), (B, Z), (B, X), (B, Z), (B, Z), (A, Y), (A, X), (B, Z), (C, Y), (A, Y), (B, Y), (B, Z), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (C, X), (B, Y), (B, Z), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (B, Y), (A, X), (B, Y), (A, Y), (A, X), (A, X), (B, Z), (B, Z), (B, Z), (C, X), (B, X), (B, Z), (A, X), (A, X), (B, Y), (A, X), (B, Z), (B, Z), (B, X), (B, Y), (B, Y), (B, Y), (A, Y), (A, Y), (A, X), (A, X), (B, Z), (B, Y), (B, Y), (B, X), (B, Y), (B, Z), (A, Z), (B, Z), (A, Z), (B, X), (B, Y), (C, Y), (B, X), (B, X), (A, X), (A, X), (A, X), (A, X), (B, Z), (B, Z), (A, Z), (B, X), (B, X), (B, X), (B, X), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (B, Y), (B, Z), (B, Z), (A, Y), (A, Z), (C, Y), (B, Y), (A, X), (B, Z), (B, X), (A, Y), (B, Y), (A, Y), (C, Z), (A, X), (A, Y), (B, X), (B, X), (C, Z), (B, Y), (A, Y), (A, Y), (A, X), (B, X), (A, X), (B, X), (A, Y), (B, Z), (B, Z), (A, Z), (B, X), (B, Z), (B, Z), (B, Y), (A, Y), (B, Z), (B, Y), (B, Z), (B, Z), (B, Z), (C, X), (B, Y), (A, Y), (B, Z), (A, Y), (A, Y), (A, X), (B, X), (B, Y), (C, Y), (C, X), (B, Z), (B, Z), (B, Z), (A, Y), (A, Z), (B, Y), (B, X), (B, X), (B, Y), (B, Z), (B, Z), (A, Y), (B, Y), (B, Z), (B, Z), (B, Z), (A, X), (C, Y), (B, Z), (A, Z), (C, Z), (B, X), (B, Y), (B, Z), (A, Z), (A, X), (B, X), (A, X), (C, X), (B, Z), (A, X), (B, Y), (C, Y), (B, Y), (B, Z), (B, X), (A, Y), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, X), (B, X), (B, Z), (C, X), (A, Y), (B, Z), (B, X), (B, Z), (B, Y), (B, Z), (B, Y), (C, Y), (A, X), (B, Y), (B, Z), (B, Z), (B, X), (B, Z), (A, X), (B, Z), (A, X), (B, Y), (B, Z), (A, X), (B, Z), (B, X), (A, Z), (B, Z), (C, X), (B, Z), (B, Y), (B, Y), (B, Y), (B, Z), (B, X), (B, X), (A, X), (A, X), (B, Z), (B, Z), (A, X), (A, X), (A, Z), (A, Y), (C, Z), (B, Z), (B, Y), (C, X), (B, X), (B, Y), (B, Y), (A, Y), (B, Z), (B, Z), (B, Y), (C, Y), (B, Z), (A, Y), (B, Z), (B, Z), (B, Z), (B, Z), (A, Y), (B, Z), (B, Z), (B, Z), (A, X), (B, X), (A, Y), (B, Y), (B, Z), (B, Z), (B, Z), (A, Y), (B, Z), (B, Z), (B, Z), (B, Y), (B, Y), (B, X), (B, X), (B, Y), (C, Z), (B, X), (B, Y), (C, Y), (A, Y), (B, Z), (A, Z), (B, Z), (A, Y), (B, X), (B, Z), (B, X), (C, Z), (A, Y), (B, X), (B, Z), (A, X), (A, X), (B, Z), (B, Z), (B, Y), (B, Z), (C, Y), (C, X), (B, Z), (B, Z), (A, X), (B, X), (A, Y), (B, Y), (B, Y), (C, Z), (A, X), (B, X), (B, Z), (A, Y), (B, Z), (C, X), (B, Z), (A, Z), (C, X), (A, Y), (A, Z), (B, Z), (A, Y), (A, X), (B, Z), (B, Y), (B, Z), (B, X), (B, Z), (A, X), (B, Z), (A, Z), (B, Z), (B, Z), (B, Y), (A, X), (B, Z), (B, X), (B, Y), (B, Y), (A, Y), (A, X), (C, Z), (B, Y), (C, Z), (A, X), (B, X), (B, Z), (B, X), (C, X), (B, Z), (B, Z), (A, X), (A, Y), (A, Z), (A, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Y), (A, X), (A, Y), (B, Z), (B, X), (A, Y), (B, Z), (B, Y), (B, X), (B, Z), (A, Z), (B, Y), (A, Y), (A, X), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (B, Y), (B, Z), (B, Z), (B, Z), (A, Z), (B, Y), (A, X), (C, Y), (B, Z), (B, Z), (B, Y), (B, X), (B, Z), (A, Y), (A, X), (B, Z), (B, Y), (B, Z), (A, Y), (C, X), (B, Y), (B, Z), (B, Z), (A, Y), (B, X), (B, Z), (B, Z), (A, X), (B, X), (B, Z), (A, Z), (B, Y), (B, Z), (B, Z), (B, Z), (B, Z), (B, Z), (A, Z), (B, X), (A, Y), (C, Y), (B, Z), (A, Y), (B, Z), (B, Z), (A, Y), (B, Z), (B, Z), (A, Y), (A, Y), (B, X), (B, Y), (A, X), (B, Z), (A, Y), (B, Z), (A, Z), (B, Z), (B, X), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (A, X), (B, Y), (B, Z), (B, Z), (B, Z), (B, Y), (A, Y), (B, Z), (B, Y), (B, Z), (B, Z), (B, X), (A, X), (B, Y), (A, X), (A, X), (B, Z), (A, X), (B, Z), (C, X), (B, Y), (B, Z), (B, Z), (B, Y), (A, X), (B, Z), (B, Z), (B, Y), (B, X), (B, Z), (B, X), (B, Z), (C, Y), (B, Y), (B, Z), (B, Z), (A, Z), (B, Z), (B, Z), (A, Y), (B, Z), (B, Y), (A, X), (B, Z), (B, Z), (B, Z), (B, X), (B, Z), (B, Y), (B, Z), (B, X), (C, Z), (B, Y), (B, Z), (B, Z), (B, Y), (A, X), (A, X), (B, Y), (A, Y), (B, Z), (B, X), (B, Y), (B, Z), (B, Y), (B, Z), (A, X), (C, X), (B, Z), (A, Z), (C, Y), (A, X), (B, Y), (B, Y), (A, X), (A, X), (B, Y), (B, Z), (C, Y), (B, Z), (B, Y), (A, X), (B, Y), (B, Y), (B, Z), (B, X), (B, Z), (C, X), (C, Y), (B, X), (A, Y), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, Z), (B, X), (B, X), (B, X), (B, X), (B, Y), (A, Y), (B, Z), (B, Z), (B, Z), (A, Z), (B, X), (B, X), (B, X), (B, X), (B, Z), (A, Y), (B, Y), (B, Z), (A, X), (A, X), (A, X), (B, Y), (B, Z), (B, X), (B, Z), (A, Z), (B, Z), (B, Z), (A, Y), (C, Z), (A, X), (B, Z), (C, X), (B, Z), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (C, X), (B, Z), (A, Y), (B, X), (C, X), (A, Y), (C, X), (B, Z), (B, X), (A, Z), (B, Z), (C, Y), (B, Y), (B, X), (B, Z), (B, Y), (A, Y), (B, X), (A, Z), (B, Z), (B, Z), (C, Z), (B, Z), (B, Y), (B, Z), (A, Y), (C, Y), (B, Z), (B, X), (A, Y), (B, Z), (B, Z), (B, Y), (B, Y), (B, Z), (A, X), (A, Y), (A, X), (A, Z), (B, Z), (B, Z), (B, Y), (A, Y), (B, Y), (B, Z), (B, Y), (A, Y), (B, X), (A, X), (B, Y), (B, Y), (B, X), (B, Z), (B, Y), (C, X), (B, Z), (B, Z), (B, Z), (A, X), (B, Z), (B, X), (A, Y), (A, Y), (B, Z), (A, Y), (A, Y), (A, Y), (B, Y), (B, Z), (A, X), (C, X), (B, Y), (A, X), (C, X), (B, Z), (B, Y), (A, Y), (B, X), (B, Z), (B, Y), (B, Y), (B, Z), (B, Z), (A, Y), (B, X), (B, X), (A, X), (B, Z), (B, X), (B, Z), (B, Z), (C, Z), (C, Y), (A, X), (B, X), (C, X), (B, X), (A, Z), (A, X), (B, Y), (C, X), (B, Y), (A, X), (A, X), (A, X), (B, X), (B, Z), (B, X), (B, Y), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (A, X), (B, X), (B, Z), (A, Z), (A, X), (B, Z), (C, Y), (B, Z), (A, X), (B, Z), (A, Z), (B, Z), (B, Z), (A, Y), (B, Y), (B, Z), (B, X), (B, Z), (B, Z), (C, Y), (B, Z), (B, X), (A, X), (B, Y), (B, Z), (A, Y), (A, X), (B, Z), (B, Y), (B, Z), (B, X), (A, Y), (C, Z), (B, X), (B, Z), (A, X), (B, X), (B, Z), (B, Z), (A, X), (B, Y), (B, X), (B, Z), (B, Z), (B, Y), (B, X), (B, X), (C, X), (B, Z), (C, X), (B, Z), (C, Y), (A, Y), (C, X), (B, X), (B, Y), (B, Z), (B, Y), (B, Z), (A, X), (B, Z), (B, Z), (B, Y), (B, Y), (A, X), (A, X), (A, Y), (B, Z), (B, Z), (A, Y), (B, Z), (A, X), (B, Z), (B, X), (B, X), (B, X), (A, Y), (B, Z), (B, Z), (A, Y), (B, Z), (A, Z), (B, Y), (B, X), (A, Z), (A, Z), (B, Z), (A, Y), (B, Z), (B, Y), (B, Y), (B, X), (A, Y), (B, X), (B, Z), (B, Z), (B, Y), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (B, X), (B, X), (B, Z), (A, X), (B, X), (B, Z), (B, Z), (B, Y), (A, Y), (B, Z), (B, Y), (B, Y), (A, X), (B, X), (B, Y), (C, X), (C, X), (B, Y), (A, Y), (A, Z), (B, X), (B, Z), (B, Z), (B, Z), (B, Z), (A, X), (A, Y), (A, Y), (B, Y), (C, X), (B, Z), (A, Y), (B, X), (C, Z), (B, X), (B, Y), (A, Y), (B, X), (B, Y), (B, Z), (B, Y), (B, X), (B, Y), (A, Z), (B, Z), (A, X), (B, X), (B, X), (B, Z), (B, Y), (B, Y), (B, Y), (A, X), (B, X), (B, Y), (B, Z), (A, Y), (A, X), (B, X), (B, Z), (B, Z), (C, X), (A, Z), (B, Z), (A, X), (A, Y), (C, X), (B, Z), (B, Z), (A, X), (B, X), (A, Y), (A, Y), (B, Z), (B, Z), (B, X), (A, Z), (B, Z), (B, Y), (A, Y), (B, Z), (B, Y), (A, Y), (B, Y), (B, Z), (A, X), (B, Y), (A, X), (A, Y), (A, X), (A, X), (B, Y), (A, Z), (B, Z), (A, Y), (B, Z), (A, Z), (A, Y), (B, Z), (B, Y), (B, Z), (B, X)]

problem1ReadRound :: (FirstChar, SecondChar) -> (TheirMove, YourMove)
problem1ReadRound (c1, c2) = (readFirstMove c1, readSecondMove c2)

problem1Solution = foldr (+) 0 $ map (calculateRoundPoints . problem1ReadRound) rounds
    where
        calculateRoundPoints :: (TheirMove, YourMove) -> Int
        calculateRoundPoints (theirs, yours) = roundPoints yours (play theirs yours)

problem2ReadRound :: (FirstChar, SecondChar) -> (TheirMove, Result)
problem2ReadRound (c1, c2) = (readFirstMove c1, readRoundResult c2)

problem2Solution = foldr (+) 0 $ map (calculateRoundPoints . problem2ReadRound) rounds
     where
         calculateRoundPoints :: (TheirMove, Result) -> Int
         calculateRoundPoints (theirs, result) = roundPoints (getMoveForResult theirs result) result

main :: IO ()
main = do { putStrLn (show problem1Solution)
          ; putStrLn (show problem2Solution) }

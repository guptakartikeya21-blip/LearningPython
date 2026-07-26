import argparse


def parse_args():
    parser = argparse.ArgumentParser(description="Add two numbers provided as parameters.")
    parser.add_argument("x", type=float, help="First number")
    parser.add_argument("y", type=float, help="Second number")
    return parser.parse_args()


def add_numbers(a: float, b: float) -> float:
    return a + b


if __name__ == "__main__":
    args = parse_args()
    result = add_numbers(args.x, args.y)
    print(result)


import math

def calculate(expression):
    try:
        # Replace calculator symbols
        expression = expression.replace("×", "*")
        expression = expression.replace("÷", "/")
        expression = expression.replace("^", "**")
        expression = expression.replace("π", str(math.pi))
        expression = expression.replace("√", "math.sqrt")
        expression = expression.replace("log", "math.log10")
        

        # Evaluate the expression
        result = eval(expression)

        return result

    except ZeroDivisionError:
        return "Cannot divide by zero"

    except Exception:
        return "Invalid Expression"
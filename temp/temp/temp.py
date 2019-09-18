

from sense_hat import SenseHat

sense =SenseHat()

t = sense.get_temperature()

p = sense.get_pressure()
h =sense.get_humidity()

t = round (t,1)
p = round (p,1)
h = round (h,1)

mes = "Temperature =%s, Pressure =%s, Humidity=%s" %(t,p,h)
sense.show_message(mes, scroll_sepeed=0.05)
print(mes)
#!/usr/bin/python3

import socket

# Creating the socket object
serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# host = '192.168.1.2' (static host)
# host = socket.gethostname()
# host = socket.gethostbyaddr()  # Dynamic host 
host = '0.0.0.0'

port = 443

# Binding to object
serverSocket.bind((host, port)) # Host will be replaced/substituted with IP, if changed and not running on host

# Starting TCP listener
serverSocket.listen(3)

while True:
    # Starting the connection
    clientsocket, address = serverSocket.accept()

    print("received connection from %s " % str(address))

    message = 'hello! Thank you for connecting to the server' + "\r\n"

    clientsocket.send(message.encode('ascii'))

    clientsocket.close()
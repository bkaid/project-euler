import itertools
import os
import sys
import time

def project_euler_59():
    script_path = os.path.dirname(os.path.realpath(sys.argv[0]))
    input_file = script_path + '/p059_cipher.txt'

    cipher = None
    with open(input_file, mode='r') as file:
        cipher = list(map(int, file.read().split(',')))

    characters = list(map(chr, range(ord('a'), ord('z')+1)))
    for combination in itertools.product(characters, repeat=3):
        decoded = list(cipher)
        for i in range(0, len(decoded)):
            decoded[i] = decoded[i] ^ ord(combination[i % 3])
        message = "".join(map(chr, decoded))
        if " the " in message and " and " in message:
            print("{}\n\n".format(message))
            return sum(decoded)

if __name__ == '__main__':
    print('Project Euler #59')
    print('Decrypt the message and find the sum of the ASCII values in the original text.')
    START_TIME = time.time()
    print('Result: {}'.format(project_euler_59()))
    print('Elapsed time: {} seconds'.format(time.time() - START_TIME))

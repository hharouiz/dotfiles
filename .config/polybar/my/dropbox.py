#!/usr/bin/env python

from re import match
from subprocess import check_output


def parse_time(status_string):
    m = match(r'Syncing.* • (?P<time>[\w \+]+)', status_string)
    return m.group('time')

def main():
    status_string = str(check_output(['dropbox-cli', 'status']), encoding='utf-8').strip()

#    if status_string == 'Up to date':
#        return ''
#    elif status_string == 'Syncing...':
#        return ''
#    elif 'Syncing' in status_string:
#        eta = parse_time(status_string)
#        return f' ({eta})'
#    else:
#        return ''
    return status_string

if __name__ == "__main__":
        print(main())

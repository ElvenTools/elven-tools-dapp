Here come routes which should be only callable by the current logged in user and noone else

This prevents that endpoints concerning address "A" are called by anyone else but address "A"

Under the hood this happens by letting the user sign a message upon login

Please note that as of now, Ledger and Web Wallet don't support this!
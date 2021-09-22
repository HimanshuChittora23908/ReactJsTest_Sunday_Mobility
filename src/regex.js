export var validUserName = new RegExp ('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$');
export var validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export var validMobile = new RegExp('^[2-9]{2}[0-9]{8}$');
export var validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
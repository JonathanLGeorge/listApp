let time = "02-2019"

let info =  []
info = time.split("-")

console.log(info);

let ut = new Date(info[1], info[0])

console.log(ut.getTime());
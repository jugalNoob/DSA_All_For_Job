function ToOWER(data) {

    let result = '';

    for (let i = 0; i < data.length; i++) {


        let charc = data.charCodeAt(i);

        // Check if uppercase letter
        if (charc >= 65 && charc <= 90) {
            result += data[i].toLowerCase();
        } else {
            result += data[i]; // keep other characters as is
        }
    }

    return result;
}


console.log(ToOWER('JUGAL'))



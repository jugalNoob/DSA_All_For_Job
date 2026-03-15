
class Linked {
    constructor(data, role) {
        this.data = data;
        this.role = role;
    }

    showData() {
        console.log('Data:', this.data);
    }
}

class LinkedTwo extends Linked {
    deletePost() {
        if (this.role === 'admin') {
            super.showData();
            console.log('Deleted:', this.data);
        } else {
            console.log('Permission denied');
        }
    }
}

let link = new LinkedTwo('jugal sharma', 'admin');
link.deletePost();

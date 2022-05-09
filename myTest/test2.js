function toto() {
    let momo = [
        { name: '000;' },
        { name: '001;' }
    ];
    console.log('toto');
    momo.forEach(item => {
        console.log('0000');
        console.log('0001:' + item);
        console.log('0001:' + JSON.stringify(item));
    })
}




toto();
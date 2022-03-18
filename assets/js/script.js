let people = [
    {
        name: 'Lucas de Sales Arêas Pereira',
        tel: '11955555555',
        XP: 'true'
    },
    {
        name: 'Milene Niza de Sales',
        tel: '11988888888',
        xp: 'true'
    },
    {
        name: 'Ana Carolina de Sales Arêas Pereira',
        tel: '11944444444',
        xp: 'true'
    },
]

for (person in people) {
    document.querySelector('table.list tbody').innerHTML += 
    `<tr style="background-color: ${ ((person % 2 === 0) ? '#FFF' : 'var(--listmiddle-color)' )}" >
                    <td>
                        ${ people[person].name }
                    </td>
                    <td>
                       ${ people[person].tel }
                    </td>
                    <td>
                        ${ people[person].xp ? '<strong style="color: green"> Sim </strong>' : '<strong style="color: red"> Não </strong>' }
                    </td>
                    <td>
                        <button>Change</button>
                    </td>
                </tr>`
        
}
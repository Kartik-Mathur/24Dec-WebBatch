import React from 'react'

const MagicNumber = () => {
    let number = Math.floor(Math.random() * 10);
    let winner = 'https://media3.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif?cid=6c09b952bl9my9ausb4m3rdj6oripyzrzq2bdg7ntc349hgm&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    let loser = 'https://media.tenor.com/WvotbqtvuRUAAAAM/reasonsimbroke-kramer.gif';

    return (
        <div>
            <div>MagicNumber: {number}</div>
            {number == 7 && <img src={winner} />}
            {number != 7 && <img src={loser} />}
        </div>
    )
}

export default MagicNumber
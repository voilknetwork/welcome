import React from 'react'

export default function Crumb({name, desc}) {
    return (
        <section id="saasio-breadcurmb" class="saasio-breadcurmb-section">
            <div class="container">
                <div class="breadcurmb-title text-center">
                    <h2>{name}</h2>
                </div>
                <div class="breadcurmb-item-list text-center ul-li">
                 <ul class="saasio-page-breadcurmb">
                     <li><a href="/">Home</a></li>
                     <li><a href={`/${name}`}>{name}</a></li>
                 </ul>
             </div>
         </div>
     </section>
    )
}

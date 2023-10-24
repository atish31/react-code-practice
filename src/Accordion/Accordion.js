import { useState, setState } from "react";
export const Accordian = () => {
    const [index, setIndex] = useState(0);
    const [content, setContent] = useState('');
    const [active, setActive] = useState(0);
    const contentObject = {
        0: 'This is the content for the HTMl',
        1: 'This is the content for the CSS',
        2: 'This is the content for the JS',
    }

    const toggleAccordian = (action, index) => {
        if(action === 'close') {
            setActive(active => active = undefined);
        } else {
            setActive(active => active = index);
        }
    }
    
    return (
        <div>
            <div class='row'>
                <div class='col-12'>
                    HTML
                    {
                        (active !== undefined && active ===0) ? 
                        <i onClick={() => toggleAccordian('close', 0)}>Close</i> : 
                        <i onClick={() => toggleAccordian('open', 0)}>Open</i> 
                    }
                </div>
                { 
                    active === 0 && 
                    <div col-12>
                        {contentObject[active]}
                    </div>
                }
                
                <div class='col-12'>
                    CSS
                    {
                        (active !== undefined && active ===1) ? 
                        <i onClick={() => toggleAccordian('close', 1)}>Close</i> : 
                        <i onClick={() => toggleAccordian('open', 1)}>Open</i> 
                    }
                </div>
                { 
                    active === 1 && 
                    <div col-12>
                        {contentObject[active]}
                    </div>
                }

                <div class='col-12'>
                    Javascript
                    {
                        (active !== undefined && active === 2) ? 
                        <i onClick={() => toggleAccordian('close', 2)}>Close</i> : 
                        <i onClick={() => toggleAccordian('open', 2)}>Open</i> 
                    }
                </div>
                { 
                    active === 2 && 
                    <div col-12>
                        {contentObject[active]}
                    </div>
                }
            </div>
        </div>
    );
} 
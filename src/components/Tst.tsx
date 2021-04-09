import { useEffect, useState } from "react";

interface TesteProps {
    test: string;
}

export const Teste = () => {
    const [tst, setTst] = useState<TesteProps>({} as TesteProps);
    
    useEffect(() => {
        var tema = {
            /* Dark mode (Default) */
            dark: {},
            light: {}
        }

        var layout = {
            test: tema.dark ? 'tst' : tema.light ? 'red' : '',
            test2: tema.dark ? 'tst2' : tema.light ? 'red2' : ''
        };

        tema = {
            /* Dark mode (Default) */
            dark: layout,
            light: layout
        }

        // console.log('dark:', tema.dark);
        // console.log('light:', tema.light);
    });

    return (<></>);
}

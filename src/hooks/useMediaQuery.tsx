import {useEffect, useState} from 'react';

export function useMediaQuery(query: string) {
    const [queryMatches, setQueryMatches] = useState(false);

    useEffect(() => {
        const mediaMatcher = window.matchMedia(query);
        
        function checkIsMobile() {
            setQueryMatches(mediaMatcher.matches);
        }

        // First run set value.
        checkIsMobile();

        mediaMatcher.addEventListener('change', checkIsMobile);

        () => mediaMatcher.removeEventListener('change', checkIsMobile);
    }, []);

    return queryMatches;
}

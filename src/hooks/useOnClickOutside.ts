/*
 * File: useOnClickOutside.ts
 * File Created: Wednesday, 12th April 2023 7:32:46 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Wednesday, 12th April 2023 7:34:51 am
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */

import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<any>, handler: (e : Event) => void) => {
	useEffect(() => {
		const listener = (event: any) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};
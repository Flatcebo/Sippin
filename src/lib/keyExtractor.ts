import {useCallback} from 'react';

export const keyExtractor = useCallback((item: any) => item.id, []);

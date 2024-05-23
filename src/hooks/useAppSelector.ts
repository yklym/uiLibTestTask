import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export const useAppSelector = useSelector.withTypes<RootState>();

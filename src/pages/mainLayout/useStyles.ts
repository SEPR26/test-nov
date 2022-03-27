import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        '& div.links': {
            display: 'flex',
            '& h6:first-child': {
                margin: '0 15px'
            }
        }
    }
});
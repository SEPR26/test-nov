import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        '& div.user-content': {
            '& div.user-name': {
                display: 'flex',
                '& h6:first-child': {
                    marginRight: '6px'
                }
            }
        },
        '& div.show-more': {
            marginTop: '50px',
            textAlign: 'center'
        }
    }
});
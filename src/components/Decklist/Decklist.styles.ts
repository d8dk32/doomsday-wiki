import {
  Theme,
  alpha,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      borderTopColor: theme.palette.divider,
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      overflowX: 'auto',
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },

    gutters: theme.mixins.gutters(),

    root: {
      ...theme.mixins.barf(),
      borderBottomWidth: 1,
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderTopWidth: 1,
      '& + &': {
        borderTopWidth: 0,
        marginTop: '0 !important',
      },
    },

    subtitle: {
      alignItems: 'center',
      display: 'flex',
      '& > :not(:first-child)': {
        marginLeft: theme.spacing(),
      },
      '& > * > :not(:first-child)': {
        marginLeft: theme.spacing(0.5),
      },
    },

    summary: {
      display: 'block',
    },
  })
);

import {createTheme, MantineProvider, Menu, Popover, Portal, Switch, Typography} from "@mantine/core";
import CustomSelect from "./CustomSelect.tsx";
import '@mantine/core/styles.css';

const theme = createTheme({
    fontFamily: 'Noto Sans, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: {
        fontFamily: 'Noto Serif, Georgia, serif',
        sizes: {
            h1: { fontSize: '40px', fontWeight: '500' },
            h2: { fontSize: '36px', fontWeight: '500' },
            h3: { fontSize: '24px', fontWeight: '500' },
            h4: { fontSize: '20px', fontWeight: '700' },
            h5: { fontSize: '20px', fontWeight: '400' },
            h6: { fontSize: '16px', fontWeight: '700' },
        },
    },
    components: {
        Switch: Switch.extend({
            defaultProps: {
                size: 'md',
                withThumbIndicator: false,
            },
            styles: {
                track: {
                    height: 24,
                    width: 42,
                },
            },
        }),
        Popover: Popover.extend({
            styles: {
                dropdown: {
                    borderRadius: 6,
                },
            },
        }),
        Portal: Portal.extend({
            defaultProps: {
                reuseTargetNode: false,
            },
        }),
        Menu: Menu.extend({
            styles: {
                item: {
                    borderRadius: 6,
                },
                dropdown: {
                    borderRadius: 6,
                },
            },
        }),
    },
});

export function App() {
  return (
    <MantineProvider theme={theme}>
        <Typography>
            This jumps around when opening:
        </Typography>
        <CustomSelect onChange={() => {}} value="1" values={[{ value: '1', label: '1' }]} />
    </MantineProvider>
  )
}

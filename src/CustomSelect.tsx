import { Box, Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import type { ComponentChildren } from 'preact';

export interface CustomSelectProps<T> {
    value?: T | null;
    onChange(value: T): void;
    values: { value: T; label: string }[];
    placeholder?: string;
    label?: string;
    defaultValue?: T;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    disabled?: boolean;
}

const CustomSelect = <T extends string>(
    props: CustomSelectProps<T>,
): ComponentChildren => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = props.values.map(({ value, label }) => (
        <Combobox.Option value={value} key={value}>
            {label}
        </Combobox.Option>
    ));

    const selectedLabel = props.values.find(
        option => option.value === props.value,
    )?.label;

    const defaultValueLabel = props.values.find(
        option => option.value === props.defaultValue,
    )?.label;

    return (
        <Box /*mt={props.mt} mb={props.mb} ml={props.ml} mr={props.mr}*/>
            <Combobox
                store={combobox}
                withinPortal={false}
                onOptionSubmit={val => {
                    props.onChange(val as T);
                    combobox.closeDropdown();
                }}
                disabled={props.disabled}
            >
                <Combobox.Target>
                    <InputBase
                        label={props.label}
                        component="button"
                        type="button"
                        pointer
                        styles={{
                          input: { height: 48, borderRadius: 6 },
                          label: { marginBottom: 6 },
                        }}
                        onClick={() => combobox.toggleDropdown()}
                        rightSectionPointerEvents="none"
                        disabled={props.disabled}
                    >
                        {selectedLabel || defaultValueLabel || (
                            <Input.Placeholder>{props.placeholder}</Input.Placeholder>
                        )}
                    </InputBase>
                </Combobox.Target>
                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </Box>
    );
};

export default CustomSelect;

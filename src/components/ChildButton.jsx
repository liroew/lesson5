import { memo } from "react";
import { Button } from "antd";

export const ChildButton = memo(({onClick, label}) => {
    console.log('ChildButton render')
    return (
        <Button onClick={onClick}>{label}</Button>
    )
});
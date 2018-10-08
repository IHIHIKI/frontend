import * as React from "react";
import {DataLoader, Modal} from "../../../reusable";
import {User as UserType} from "../../modules/account/types";
import UserInfo from "./UserInfo";

const Style = require("./User.scss");

export type Props = {
    userName?: string;
    user?: UserType;
};

const User = ({userName, user}: Props) =>
    user ? (
        <UserInfo user={user} />
    ) : (
        <DataLoader url={`/user/name/${userName}`} success={user => <UserInfo user={user} />} />
    );

export default User;

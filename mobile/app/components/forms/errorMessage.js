import React from "react";
import AppText from "../appText";

const ErrorMessage = ({ error, visible }) =>
  error && visible ? <AppText style={{ color: "red" }}>{error}</AppText> : null;

export default ErrorMessage;

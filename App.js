import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Vibration,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputAFocus: false,
            inputBFocus: false,
            inputCFocus: false,
            valueA: "",
            valueB: "",
            valueC: "",
            result: "",
            intervalId: 0,
        };
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            if (
                this.state.valueA != "" &&
                this.state.valueB != "" &&
                this.state.valueC != ""
            ) {
                this.calculate();
            } else this.setState({ result: "" });
        }, 1000);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    insertNum(num) {
        if (this.state.inputAFocus) {
            let newValue =
                this.state.valueA != "" ? this.state.valueA + num : num;
            this.setState({ valueA: newValue });
        } else if (this.state.inputBFocus) {
            let newValue =
                this.state.valueB != "" ? this.state.valueB + num : num;
            this.setState({ valueB: newValue });
        } else if (this.state.inputCFocus) {
            let newValue =
                this.state.valueC != "" ? this.state.valueC + num : num;
            this.setState({ valueC: newValue });
        }
    }

    focused(index, status) {
        if (index == 1) this.setState({ inputAFocus: status });
        else if (index == 2) this.setState({ inputBFocus: status });
        else if (index == 3) this.setState({ inputCFocus: status });
    }

    backspace() {
        if (this.state.inputAFocus) {
            let newValue =
                this.state.valueA == "" ? "" : this.state.valueA.slice(0, -1);
            this.setState({ valueA: newValue });
        } else if (this.state.inputBFocus) {
            let newValue =
                this.state.valueB == "" ? "" : this.state.valueB.slice(0, -1);
            this.setState({ valueB: newValue });
        } else if (this.state.inputCFocus) {
            let newValue =
                this.state.valueC == "" ? "" : this.state.valueC.slice(0, -1);
            this.setState({ valueC: newValue });
        }
    }

    calculate() {
        let res =
            (parseFloat(this.state.valueC) * parseFloat(this.state.valueB)) /
            parseFloat(this.state.valueA);
        res = +res.toFixed(3);
        res = res.toString();
        this.setState({ result: res });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#848AEF" />

                <View style={styles.fields}>
                    <View style={styles.row}>
                        <View style={[styles.field, { marginTop: 0 }]}>
                            <Text style={styles.label}>Value A</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#FFFFFF99"
                                selectionColor="rgba(255, 255, 255, 0.4)"
                                placeholder="00"
                                showSoftInputOnFocus={false}
                                onFocus={() => this.focused(1, true)}
                                onBlur={() => this.focused(1, false)}
                                focus={this.state.inputAFocus}
                                value={this.state.valueA}
                            />
                        </View>
                        <View style={[styles.field, { marginTop: 0 }]}>
                            <Text style={styles.label}>Value B</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#FFFFFF99"
                                selectionColor="rgba(255, 255, 255, 0.4)"
                                placeholder="00"
                                showSoftInputOnFocus={false}
                                onFocus={() => this.focused(2, true)}
                                onBlur={() => this.focused(2, false)}
                                value={this.state.valueB}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Value C</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#FFFFFF99"
                                selectionColor="rgba(255, 255, 255, 0.4)"
                                placeholder="00"
                                showSoftInputOnFocus={false}
                                onFocus={() => this.focused(3, true)}
                                onBlur={() => this.focused(3, false)}
                                value={this.state.valueC}
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>Result</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#FFFFFF99"
                                selectionColor="rgba(255, 255, 255, 0.4)"
                                placeholder="00"
                                type="text"
                                showSoftInputOnFocus={false}
                                value={this.state.result}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.keyboard}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("1");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("2");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("3");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("4");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("5");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("6");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("7");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("8");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("9");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum("0");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => {
                                this.insertNum(".");
                                Vibration.vibrate(100);
                            }}
                        >
                            <Text style={styles.btnKeyboardText}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnKeyboard}
                            onPress={() => this.backspace()}
                        >
                            <Ionicons
                                name="backspace"
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#777DE3",
    },
    fields: {
        flex: 1,
        maxHeight: 250,
        flexDirection: "column",
    },
    field: {
        flex: 1,
        backgroundColor: "#848AEF",
        marginRight: 3,
        marginTop: 3,
        padding: 20,
    },
    label: {
        color: "#FFF",
        fontWeight: "600",
    },
    input: {
        flex: 1,
        color: "#FFF",

        fontSize: 40,
    },
    row: {
        flex: 1,

        flexDirection: "row",
    },
    keyboard: {
        flex: 1,
        flexDirection: "column",
    },
    btnKeyboard: {
        flex: 1,
        minWidth: 100,
        maxHeight: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    btnKeyboardText: {
        color: "#fff",
        fontSize: 30,
    },
    btnCalculate: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1000,
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "#444cda",
        shadowColor: "#eaeaed",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.14,
        shadowRadius: 6.3,

        elevation: 8,
        top: 10,
        right: 10,
    },
});

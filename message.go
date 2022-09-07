package main

import (
	"fmt"

	bootstrap "github.com/ctwj/go-electron-vue/bootstrap"

	"github.com/asticode/go-astilectron"
)

type Message struct {
	Name    string `json:"name"`
	Payload string `json:"payload"`
}

func sendMessageTest(w *astilectron.Window) {

	// 发送消息，收不到返回数据
	bootstrap.SendMessage(w, "test", "test data", func(m *bootstrap.MessageIn) {})
}

// handleMessages handles messages
func handleMessages(w *astilectron.Window, m bootstrap.MessageIn) (payload interface{}, err error) {
	fmt.Println("message")
	if m.Name == "hello" {

		// 发送测试
		sendMessageTest(w)

		return "world", nil
	}
	if m.Name == "minWindow" {

		w.Minimize()
		return "", nil
	}
	if m.Name == "exitWindow" {
		w.Close()
		return "", nil
	}
	return nil, nil
}

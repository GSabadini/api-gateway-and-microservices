package main

import (
	"fmt"
	"log"
	"net/http"
)

func handlerMainProcess(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello World GoLang!")
}

func main() {
	http.HandleFunc("/", handlerMainProcess)
	log.Fatal(http.ListenAndServe(":3001", nil))
}

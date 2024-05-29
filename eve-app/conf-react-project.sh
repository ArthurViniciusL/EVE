#!/bin/bash

# Autor: Arthur Vinicius Souza Lucena - 10/05/2024
# version 1.0

echo "Arthur.vsl"

echo "Iniciando..."

cd src

echo "Criandos pastas..."

foldersPattern=("components" "views" "styles" "assets" "utils" "middleware" "tests");

for foldersPattern in "${foldersPattern[@]}"
do
	mkdir $foldersPattern
done

echo "Deletando arquivos..."

reactDefaults=("App.css" "App.js" "App.test.js" "index.css" "logo.svg");

for reactDefaults in "${reactDefaults[@]}"
do
	rm $reactDefaults
done

echo "Criando styles/styles.css"
cd styles
touch style.css
cd ../

echo "Criando views/home/index.jsx"
cd views
mkdir Home
cd Home
touch index.jsx
touch style.css

cd ../../

echo "Conluido!"

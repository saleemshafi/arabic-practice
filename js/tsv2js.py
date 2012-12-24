import sys
import codecs

def convertToJSON(line):
	pieces = line.split("\t");
	return '		"'+pieces[0].strip()+'" : "'+pieces[1].strip()+'",\n'

setName = sys.argv[1]
inputFilename = setName+".tsv"
outputFilename = "cards."+setName+".js"

input = codecs.open(inputFilename, 'r', encoding='utf-8')
output = codecs.open(outputFilename, 'w', encoding='utf-8')

output.write("(function(window, $) {\n");
output.write("	window.FlashCards.registerCardSet('"+setName+"', new StaticCards({\n");

for line in input:
	output.write(convertToJSON(line))

output.write("	}));\n");
output.write("}(window, jQuery));\n");



input.close();
output.close();
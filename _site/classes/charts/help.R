setwd("/Users/kevin/teaching/spring-2015/classes/charts")

data <- read.delim("data.tsv")




type <- c("drink", "fruveg", "protein", "starch")
cols <- c("#F2D291", "#E2DAED", "#B0C7D6", "#E5B0A3" )
join <- data.frame(type, cols)
data <- merge(data, join, by="type", all.x=T)

data <- data[order(data$val),]

barplot(data$val, horiz=T, names.arg=data$food, col=data$cols, border=F, las=1, names.cex=.5, axes=F)

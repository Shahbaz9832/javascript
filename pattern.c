#include<stdio.h>
int main(){
for(int i=0;i<=4;i++){
    for(int j=0;j<=6;j++){
        if(i==1&& j==4||i==2 && j==3||i==2 && j==5||i==3 && j==2||i==3 && j==4||i==3 && j==6||i==4 && j==1||i==4&&j==6 ){
            printf("*");
        }
    else{
        printf("  ");
    }
    }
    printf("\n");
}
}
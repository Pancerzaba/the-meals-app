class Meal{
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingradients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree){
        this.id=id;
        this.categoryIds=categoryIds;
        this.title=title;
        this.imageUrl=imageUrl;
        this.ingradients=ingradients;
        this.steps=steps;
        this.duration=duration;
        this.complexity=complexity;
        this.affordability=affordability;
        this.isGlutenFree=isGlutenFree;
        this.isLactoseFree=isLactoseFree;
        this.isVegan=isVegan;
        this.isVegetarian=isVegetarian;

    }
}

export default Meal;
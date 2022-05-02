- [Test de performance](#Test-de-performance)
- [Algorithme de filtre ECMA 5](#Algorithme-de-filtre-ECMA-5)

## How to

### Github README.md
* `git add README.md` (add the file to commit)
* `git commit -m "add readme"` (give a name to commit)
* `git push` (push commit)

### Github branch
* `git branch`  (list the branch)
* `git branch name`  (add branch "name")
* `git checkout name` (go to the branch "name")
* `git branch -d name` (delete the branch "name")


## What I learned
* Do a readme on Github
* Do a branch on Github
* Do an algorigrammer on draw.io

## New tool
* JS Bench (speed test of two code in parallel)
* Draw.io (schema online)
* Nation (bank my learn & make a progress project, online)

# Test de performance

<details>
    <summary> Test de performance</summary>
    Afin de bien comprendre les performances des fonctions native de JS, il a été demandé de faire un algorigramme sur le filtre principal de ce projet.
    Il conciste a filtrer les cartes des menus au fur et à mesure de la saisie des ingrédiants, appareils, ustensiles et nom des recettes dans un input.
    J'ai donc utilisé comme demandé le banc de test JSBEN.CH en ligne, mais après plusieurs tests, JSBEN.CH ne parvient pas à faire la différence entre mes deux codes, il me dit que le plus performant est un coup les fonction native et un coup la fonction avec les boucles.
    J'ai donc utilisé JSBench.me, qui m'a bien montré que les fonction native on des algorithme bien plus performent qu'un simple filtre fait sans un algo bien réfléchi.
</details>

## Algorithme de filtre() ECMA 5

```bash

if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}


```
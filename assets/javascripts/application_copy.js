const isEmpty = function(str) {
  return (!str || 0 === str.length);
}

class List {
  constructor(listName) {
    this.createList(listName);
  }

  createList(listname) {
    // (div.main-section footer.footer a)
    let listLink = document.createElement('a');
    listLink.innerHTML = `&plus; Add another card`;

    // Creating list footer. (div.main-section footer)
    let listAddCard = document.createElement('footer');
    listAddCard.classList.add('footer');
    listAddCard.addEventListener('click', function (event) {
      listAddCard.remove();
      listElement.append(listAddFormSection);
    });
    listAddCard.append(listLink);

    // (div.main-section div.container ul)
    let listCardItems = document.createElement('ul');
    listCardItems.id = listname;
    listCardItems.classList.add('items');

    // (div.main-section div.container ul)
    let listCard = document.createElement('li');

    // Creating list cards container. (div.container)
    let listCardContainer = document.createElement('div');
    listCardContainer.append(listCardItems);

    // Creating list view menu icon. (div header img)
    let listMenuIcon = document.createElement('img');
    listMenuIcon.id = "more-button-grey";
    listMenuIcon.src = "assets/images/icons/more-button-grey.png";
    listMenuIcon.alt = "more button";

    // (div header h2)
    let listNameElement = document.createElement('h2');
    listNameElement.setAttribute('contenteditable', true);
    listNameElement.tabIndex = -1;
    listNameElement.innerHTML = listname;

    // Creating list view header element. (div header)
    let listNameElementContainer = document.createElement('header');
    listNameElementContainer.append(listNameElement);
    listNameElementContainer.append(listMenuIcon);

    // Creating the list view. (div.main-section)
    let listElement = document.createElement('div');
    listElement.id = name;
    listElement.classList.add("main-section");
    listElement.append(listNameElementContainer);
    listElement.append(listCardContainer);
    listElement.append(listAddCard);

    //Appending main section to body element.
    let $main = document.querySelector('main');
    $main.append(listElement);


    // Creating form for new card for the list. This replaces the footer on.click
    // This needs to be reviewed! (div.main-section section-card-title form fieldset button a)
    let formCloseButtonLink = document.createElement('a');
    formCloseButtonLink.href = "/";
    formCloseButtonLink.innerHTML = "&#10005;";

    // Button to close form. (div.main-section section-card-title form fieldset button)
    let formCloseButton = document.createElement('button');
    formCloseButton.id = "footer-close-button";
    formCloseButton.append(formCloseButtonLink);
    
    // Submit button. (div.main-section section-card-title form fieldset input[type=submit])
    let formSubmitButton = document.createElement('input');
    formSubmitButton.type = "submit";
    formSubmitButton.name = 'submit-button';
    formSubmitButton.value = "Add Card";

    // Text input box. (div.main-section section-card-title form fieldset label input)
    let cardFormInput = document.createElement('textarea');
    cardFormInput.placeholder = "Enter a title for this card...";
    // cardFormInput.addEventListener('focusout', function (event) {
    //   event.preventDefault();
    //   listAddFormSection.remove();
    //   listElement.append(listAddCard);
    // });

    // Label. (div.main-section section-card-title form fieldset label)
    let cardLabel = document.createElement('label');
    cardLabel.htmlFor = "card-title-text";
    cardLabel.append(cardFormInput);

    // Fieldset. (div.main-section section#card-title form fieldset)
    let listAddFormFieldset = document.createElement('fieldset');
    listAddFormFieldset.append(cardLabel);
    listAddFormFieldset.append(formSubmitButton);
    listAddFormFieldset.append(formCloseButton);

    // Creating the Form for submission. (div.main-section section#card-title form)
    let listAddForm = document.createElement('form');
    listAddForm.method = "POST";
    listAddForm.action = "/";
    listAddForm.addEventListener("submit", function (event) {
      event.preventDefault();
        let newCard = document.createElement('li');
        newCard.innerText = cardFormInput.value;
        listCardItems.append(newCard);

    })
    listAddForm.append(listAddFormFieldset);

    // Creating the form section. (div.main-section section#card-title)
    let listAddFormSection = document.createElement('section');
    listAddFormSection.id = "card-title";
    listAddFormSection.append(listAddForm);
  }
}

$(function() {
  //make stuff sortable
  $("#things-to-do-items, #doing-items, #done-items").sortable({ connectWith: ".items"});  

  //   // Hide card form
  //   $("input[name='card-title-text']").focusout(function(event) {
  //     event.preventDefault();
  //     $("section#card-title").hide();
  //     $footer.show();
  //   });
  // });

  $("#add-list").click(function(event) {
    event.preventDefault();
    $addList = $(this);
    $addList.hide();
    $('section#list-title').show();

    // Submit event for new list form
    $('section#list-title form').submit(function(event)  {
      event.preventDefault();

      let $listName = $("input[name='list-title-text']");
      if (isEmpty($listName.val())) {
        $('section#list-title').show();
        $addList.hide();
      }
      else {
        new List($listName.val());
        $listName.val('');
        $('section#list-title').hide();
        $addList.show();
      }
    });

    $('section#list-title form').focusout(function (event) {
      event.preventDefault();

      $('section#list-title').hide();
      $addList.show();
    });
  });
})
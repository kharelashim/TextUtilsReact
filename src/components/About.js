import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 style={{ backgroundcolour: props.mode === 'white' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          TextUtils gives you a way to analyze your text quickly and effectively, be it word count character count or any string conversion.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           
                        TextUtils is a versatile and user-friendly text manipulation library that offers a wide range of features for efficiently handling textual data in software applications. Designed with ease of use and flexibility in mind, TextUtils provides developers with powerful tools for string manipulation, text formatting, parsing, searching, and other essential operations.
                        <br />
                        One of the key benefits of TextUtils is its accessibility—it is completely free to use, enabling developers to integrate its functionality into their projects without any cost barriers. Whether you're working on a personal project, a commercial application, or an open-source initiative, TextUtils offers a valuable resource without requiring any upfront payment or subscription fees.
                        <br />
                        With TextUtils, developers can leverage its comprehensive suite of text processing capabilities to streamline development workflows, improve code efficiency, and enhance the overall user experience of their applications. Whether you need to concatenate strings, parse structured text data, search for specific patterns, or perform advanced text analysis, TextUtils provides the tools you need—all at no cost.
                        <br />
                        Furthermore, TextUtils is often accompanied by thorough documentation and community support, making it easy for developers to get started and troubleshoot any issues they may encounter along the way. Whether you're a seasoned developer or just starting out, TextUtils empowers you to efficiently manage and manipulate text data within your applications, all while keeping your budget in check with its free-to-use model.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Functionalities offered by a TextUtils</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>String Manipulation:</strong> Functions for modifying and transforming strings, such as concatenation, splitting, trimming, case conversion (e.g., converting to lowercase or uppercase), and replacing substrings.
                        <br />
                        <strong>Text Formatting:</strong> Tools for formatting text according to specific rules or styles, including indentation, alignment, padding, and applying markup or styling.
                        <br />
                        <strong>Parsing and Tokenization:</strong> Methods for parsing structured text data or breaking text into individual tokens or elements based on delimiters, regular expressions, or predefined patterns.
                        <br />
                        <strong>Searching and Matching:</strong> Utilities for searching text for specific patterns, substrings, or regular expressions, and extracting relevant information or performing pattern-based substitutions.
                        <br />
                        <strong>Normalization and Encoding:</strong> Functions for normalizing text data, such as converting between different character encodings, handling Unicode characters, or removing diacritics.
                        <br />
                        <strong>Text Analysis:</strong> Tools for analyzing text data, including counting words, characters, sentences, or performing linguistic analysis such as stemming, lemmatization, or sentiment analysis.
                        <br />
                        <strong>Localization and Internationalization:</strong> Support for handling multilingual text and adapting text output to different languages, regions, or cultural conventions.
                        <br />
                        <strong>Error Handling and Validation:</strong> Functions for validating text inputs, handling errors related to invalid or malformed text data, and providing feedback or suggestions for correction.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

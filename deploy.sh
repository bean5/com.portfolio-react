#!/bin/bash

npm run build && firebase deploy --only hosting || echo "Deploy failed."
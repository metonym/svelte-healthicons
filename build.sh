#!/bin/bash

echo "removing 'node_modules/healthicons'"
rm -rf node_modules/healthicons

echo "downloading 'resolvetosavelives/healthicons/public/icons/svg'..."
npx degit resolvetosavelives/healthicons/public/icons/svg node_modules/healthicons